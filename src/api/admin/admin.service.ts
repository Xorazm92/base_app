import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from 'src/core/entity/admin.entity';
import { AdminRepository } from 'src/core/repository/admin.repository';
import { BaseService } from 'src/infrastructure/lib/baseService';
import { DeepPartial } from 'typeorm';
import { BcryptEncryption } from 'src/infrastructure/lib/bcrypt/index';
import { RoleAdmin } from 'src/common/enum';
import { SigninAdminDto } from './dto/signin-admin.dto';
import { JwtService } from '@nestjs/jwt';
import { config } from 'src/config';
import { Response } from 'express';

@Injectable()
export class AdminService extends BaseService<
  CreateAdminDto,
  DeepPartial<AdminEntity>
> {
  constructor(
    @InjectRepository(AdminEntity) repository: AdminRepository,
    private readonly jwtService: JwtService,
  ) {
    super(repository);
  }

  async createSuperAdmin(createAdminDto: CreateAdminDto) {
    const hashed_password = await BcryptEncryption.encrypt(
      createAdminDto.password,
    );
    let superadmin: any;
    try {
      superadmin = await this.getRepository.create({
        ...createAdminDto,
        hashed_password,
        role: RoleAdmin.SUPERADMIN,
      });
      superadmin = await this.getRepository.save(superadmin);
    } catch (error) {
      throw new BadRequestException(`Error on creating super admin: ${error}`);
    }
    return {
      status_code: 201,
      message: 'success',
      data: {},
    };
  }

  async createAdmin(createAdminDto: CreateAdminDto) {
    const { username, password, phone_number, email } = createAdminDto;
    const exist_username = await this.getRepository.findOne({
      where: { username },
    });
    if (exist_username) {
      throw new ConflictException(`Username already exist`);
    }
    if (phone_number) {
      const exist_phone = await this.getRepository.findOne({
        where: { phone_number },
      });
      if (exist_phone) {
        throw new ConflictException(`Phone number already exist`);
      }
    }
    if (email) {
      const exist_email = await this.getRepository.findOne({
        where: { email },
      });
      if (exist_email) {
        throw new ConflictException(`Email address already exist`);
      }
    }
    const hashed_password = await BcryptEncryption.encrypt(password);
    let admin: any;
    try {
      admin = await this.getRepository.create({
        ...createAdminDto,
        hashed_password,
      });
      admin = await this.getRepository.save(admin);
    } catch (error) {
      throw new BadRequestException(`Error on creating admin: ${error}`);
    }
    return {
      status_code: 201,
      message: 'success',
      data: {},
    };
  }

  async signin(signinDto: SigninAdminDto, res: Response) {
    const { username, password } = signinDto;
    const user = await this.getRepository.findOne({ where: { username } });
    if (!user) {
      throw new BadRequestException('Username or password invalid');
    }
    const is_match_pass = await BcryptEncryption.compare(
      password,
      user.hashed_password,
    );
    if (!is_match_pass) {
      throw new BadRequestException('Username or password invalid');
    }
    const payload = {
      id: user.id,
      role: user.role,
    };
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
    const payload = {
      id: data.id,
      role: data.role,
    };
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
    res.clearCookie('refresh_token_admin');
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async editProfile(id: string, updateAdminDto: UpdateAdminDto) {
    let { username, phone_number, email, password } = updateAdminDto;
    const admin = await this.getRepository.findOne({
      where: { id },
    });
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    if (password) {
      password = await BcryptEncryption.encrypt(password);
    } else {
      password = admin.hashed_password;
    }
    if (!username) {
      username = admin.username;
    }
    if (!phone_number) {
      phone_number = admin.phone_number;
    }
    if (!email) {
      email = admin.email;
    }
    try {
      await this.getRepository.update(id, {
        username,
        hashed_password: password,
        phone_number,
        email,
        updated_at: Date.now(),
      });
    } catch (error) {
      throw new BadRequestException(
        `Error on update profile of admin: ${error}`,
      );
    }
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
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
      res.cookie('refresh_token_admin', refresh_token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
    } catch (error) {
      throw new BadRequestException(`Error on write to cookie: ${error}`);
    }
  }
}
