
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';
import { SignupDto, LoginDto, RegisterDto, UpdatePasswordDto, UpdateProfileDto } from '../../common/dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto) {
    const hashedPassword = await bcrypt.hash(signupDto.password, 10);

    const user = await this.userService.create({
      full_name: signupDto.full_name,
      email: signupDto.email,
      password_hash: hashedPassword,
      role_id: 2 // Regular user role
    });

    return {
      message: 'Foydalanuvchi muvaffaqiyatli yaratildi'
    };
  }

  async register(registerDto: RegisterDto, currentUser: any) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const user = await this.userService.create({
      full_name: registerDto.full_name,
      email: registerDto.email,
      password_hash: hashedPassword,
      role_id: 2
    });

    return {
      message: 'Foydalanuvchi muvaffaqiyatli ro\'yxatdan o\'tdi'
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);

    if (!user || !(await bcrypt.compare(loginDto.password, user.password_hash))) {
      throw new UnauthorizedException('Email yoki parol noto\'g\'ri');
    }

    const tokens = await this.generateTokens(user);

    await this.userService.update(user.id, {
      refresh_token: tokens.refresh_token,
      refresh_token_expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });

    return {
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token
    };
  }

  async updatePassword(updatePasswordDto: UpdatePasswordDto, currentUser: any) {
    const hashedPassword = await bcrypt.hash(updatePasswordDto.new_password, 10);
    
    await this.userService.update(currentUser.id, {
      password_hash: hashedPassword
    });

    return {
      message: 'Parol muvaffaqiyatli yangilandi'
    };
  }

  async updateProfile(updateProfileDto: UpdateProfileDto, currentUser: any) {
    await this.userService.update(currentUser.id, updateProfileDto);

    return {
      message: 'Profil muvaffaqiyatli yangilandi'
    };
  }

  private async generateTokens(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role_id };

    return {
      access_token: this.jwtService.sign(payload, { expiresIn: '15m' }),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' })
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const decoded = this.jwtService.verify(refreshToken);
      const user = await this.userService.findOne(decoded.sub);

      if (!user || !user.data || user.data.refresh_token !== refreshToken) {
        throw new UnauthorizedException('Yaroqsiz refresh token');
      }

      return this.generateTokens(user);
    } catch {
      throw new UnauthorizedException('Yaroqsiz refresh token');
    }
  }

  async logout(userId: number) {
    await this.userService.update(userId, {
      refresh_token: null,
      refresh_token_expires: null
    });

    return {
      message: 'Muvaffaqiyatli chiqish'
    };
  }
}
