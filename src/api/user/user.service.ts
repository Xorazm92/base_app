import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ConfirmOTPDto } from './dto/confirm-otp.dto';
import { BaseService } from 'src/infrastructure/lib/baseService';
import { DeepPartial } from 'typeorm';
import { UserEntity } from 'src/core/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/core/repository/user.repository';
import { JwtService } from '@nestjs/jwt';
import { PasscodeDto } from './dto/passcode.dto';
import { SigninDto } from './dto/signin.dto';
import { FileService } from '../file/file.service';
import { config } from 'src/config';
import { Response } from 'express';
import { EmailDto } from './dto/email.dto';
import { ConfirmEmailDto } from './dto/confirm-email.dto';
import { FullnameDto } from './dto/fullname.dto';
import { EditPasscodeDto } from './dto/passcode-edit.dto';

@Injectable()
export class UserService extends BaseService<
  SigninDto,
  DeepPartial<UserEntity>
> {
  constructor(
    @InjectRepository(UserEntity) repository: UserRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private jwtService: JwtService,
    private fileService: FileService,
  ) {
    super(repository);
  }

  async signup(signupDto: SigninDto) {
    const user = await this.getRepository.findOne({
      where: { phone_number: signupDto.phone_number },
    });
    if (user) {
      throw new ConflictException('Phone number already exist');
    }
    await this.setCache(signupDto.phone_number, '111111');
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async confirmOTPSignup(confirmOTPDto: ConfirmOTPDto, res: Response) {
    const { phone_number, otp } = confirmOTPDto;
    const otp_cache = await this.getCache(phone_number);
    if (!otp_cache || otp_cache != otp) {
      throw new BadRequestException('OTP expired or invalid phone number');
    }
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async setPasscode(passcodeDto: PasscodeDto, res: Response) {
    let user: UserEntity | any;
    try {
      user = await this.create(passcodeDto);
    } catch (error) {
      throw new BadRequestException(`Error on creating passcode: ${error}`);
    }
    const payload = { id: user.data.id };
    const { access_token, refresh_token } = await this.generateTokens(payload);
    this.writeToCookie(refresh_token, res);
    return {
      status_code: 201,
      message: 'success',
      data: {
        access_token,
        access_token_expire: config.ACCESS_TOKEN_TIME,
        refresh_token,
        refresh_token_expire: config.REFRESH_TOKEN_TIME,
      },
    };
  }

  async signin(signinDto: SigninDto) {
    await this.findByPhone(signinDto.phone_number);
    await this.setCache(signinDto.phone_number, '111111');
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async confirmOTPSignin(confirmOTPDto: ConfirmOTPDto, res: Response) {
    const { phone_number, otp } = confirmOTPDto;
    const user: UserEntity | any = await this.findByPhone(phone_number);
    const otp_cache = await this.getCache(confirmOTPDto.phone_number);
    if (!otp_cache || otp_cache != otp) {
      throw new BadRequestException('OTP expired or invalid phone number');
    }
    const payload = { id: user.id };
    const { access_token, refresh_token } = await this.generateTokens(payload);
    this.writeToCookie(refresh_token, res);
    return {
      status_code: 200,
      message: 'success',
      data: {
        access_token,
        access_token_expire: config.ACCESS_TOKEN_TIME,
        refresh_token,
        refresh_token_expire: config.REFRESH_TOKEN_TIME,
      },
    };
  }

  async refreshToken(refresh_token: string) {
    let data: any;
    try {
      data = await this.jwtService.verify(refresh_token, {
        secret: config.REFRESH_TOKEN_KEY,
      });
    } catch (error) {
      throw new BadRequestException(`Error on refresh token: ${error}`);
    }
    await this.findOneById(data?.id);
    const payload = { id: data.id };
    let access_token: any;
    try {
      access_token = await this.jwtService.signAsync(payload, {
        secret: config.ACCESS_TOKEN_KEY,
        expiresIn: config.ACCESS_TOKEN_TIME,
      });
    } catch (error) {
      throw new BadRequestException(`Error on generate access token: ${error}`);
    }
    return {
      status_code: 200,
      message: 'success',
      data: {
        token: access_token,
        expire: config.ACCESS_TOKEN_TIME,
      },
    };
  }

  async logout(refresh_token: string, res: Response) {
    let data: any;
    try {
      data = await this.jwtService.verify(refresh_token, {
        secret: config.REFRESH_TOKEN_KEY,
      });
    } catch (error) {
      throw new BadRequestException(`Error on refresh token: ${error}`);
    }
    await this.findOneById(data?.id);
    res.clearCookie('refresh_token_user');
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async editAvatar(id: string, file: Express.Multer.File | any) {
    const user = await this.getRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    let image = user.image;
    if (file) {
      image = await this.fileService.createFile(file);
      if (user.image && (await this.fileService.existFile(user.image))) {
        await this.fileService.deleteFile(user.image);
      }
    }
    try {
      await this.getRepository.update(id, {
        image,
        updated_at: Date.now(),
      });
    } catch (error) {
      throw new BadRequestException(`Error on update avatar of user: ${error}`);
    }
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async editFullname(id: string, fullnameDto: FullnameDto) {
    let { full_name } = fullnameDto;
    const user = await this.getRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!full_name) {
      full_name = user.full_name;
    }
    try {
      await this.getRepository.update(id, {
        full_name,
        updated_at: Date.now(),
      });
    } catch (error) {
      throw new BadRequestException(
        `Error on update full name of user: ${error}`,
      );
    }
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async editPasscode(id: string, editPasscodeDto: EditPasscodeDto) {
    let { passcode } = editPasscodeDto;
    const user = await this.getRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!passcode) {
      passcode = user.passcode;
    }
    try {
      await this.getRepository.update(id, {
        passcode,
        updated_at: Date.now(),
      });
    } catch (error) {
      throw new BadRequestException(
        `Error on update passcode of user: ${error}`,
      );
    }
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async editPhoneWithOTP(signinDto: SigninDto) {
    await this.setCache(signinDto.phone_number, '111111');
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async confirmOTPPhone(id: string, confirmOTPDto: ConfirmOTPDto) {
    await this.findOneById(id);
    const otp_cache = await this.getCache(confirmOTPDto.phone_number);
    if (!otp_cache || otp_cache != confirmOTPDto.otp) {
      throw new BadRequestException('OTP expired or invalid phone number');
    }
    try {
      await this.getRepository.update(id, {
        phone_number: confirmOTPDto.phone_number,
        updated_at: Date.now(),
      });
    } catch (error) {
      throw new BadRequestException(
        `Error on update phone number of user: ${error}`,
      );
    }
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async editEmailWithOTP(emailDto: EmailDto) {
    await this.setCache(emailDto.email, '111111', 10 * 60 * 1000);
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async confirmOTPEmail(id: string, confirmEmailDto: ConfirmEmailDto) {
    await this.findOneById(id);
    const otp_cache = await this.getCache(confirmEmailDto.email);
    if (!otp_cache || otp_cache != confirmEmailDto.otp) {
      throw new BadRequestException('OTP expired or invalid email address');
    }
    try {
      await this.getRepository.update(id, {
        email: confirmEmailDto.email,
        updated_at: Date.now(),
      });
    } catch (error) {
      throw new BadRequestException(`Error on update email of user: ${error}`);
    }
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async deleteUser(id: string) {
    const data = await this.findOneById(id);
    try {
      await this.getRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(`Error on deleting user: ${error}`);
    }
    if (
      data.data.image &&
      (await this.fileService.existFile(data.data.image))
    ) {
      await this.fileService.deleteFile(data.data.image);
    }
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async userDelete(id: string) {
    await this.findOneById(id);
    try {
      await this.getRepository.update(id, {
        is_active: false,
        updated_at: Date.now(),
      });
    } catch (error) {
      throw new BadRequestException(`Error on deactivate user: ${error}`);
    }
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async findByPhone(phone_number: string) {
    const user = await this.getRepository.findOne({
      where: { phone_number },
    });
    if (!user) {
      throw new NotFoundException('Phone number not found');
    }
    return user;
  }

  private async generateTokens(payload: object) {
    try {
      const [access_token, refresh_token] = await Promise.all([
        this.jwtService.signAsync(payload, {
          secret: config.ACCESS_TOKEN_KEY,
          expiresIn: config.ACCESS_TOKEN_TIME,
        }),
        this.jwtService.signAsync(payload, {
          secret: config.REFRESH_TOKEN_KEY,
          expiresIn: config.REFRESH_TOKEN_TIME,
        }),
      ]);
      return { access_token, refresh_token };
    } catch (error) {
      throw new BadRequestException(`Error on generate tokens: ${error}`);
    }
  }

  private async writeToCookie(refresh_token: string, res: Response) {
    try {
      res.cookie('refresh_token_user', refresh_token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
    } catch (error) {
      throw new BadRequestException(`Error on write to cookie: ${error}`);
    }
  }

  private async setCache(key: string, value: unknown, ttl: number = 120000) {
    try {
      await this.cacheManager.set(key, value, ttl);
    } catch (error) {
      throw new BadRequestException(`Error on write to cache: ${error}`);
    }
  }

  private async getCache(key: string) {
    try {
      const value = await this.cacheManager.get(key);
      return value;
    } catch (error) {
      throw new BadRequestException(`Error on get cache value: ${error}`);
    }
  }
}
