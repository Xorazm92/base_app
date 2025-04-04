import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { LoginDto, RegisterDto, UpdatePasswordDto, UpdateProfileDto } from '../../common/dto/auth.dto';
import { UserRole } from '../../common/enum/user-role.enum';

@Injectable()
export class AuthService {
  constructor(
    @InjectConnection() private readonly knex: Knex,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.knex('users')
      .where('username', loginDto.username)
      .andWhere('is_active', true)
      .first();

    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('Foydalanuvchi ismi yoki parol noto\'g\'ri');
    }

    // Update last login
    await this.knex('users')
      .where('id', user.id)
      .update({
        last_login: this.knex.fn.now(),
      });

    const payload = {
      id: user.id,
      username: user.username,
      role: user.role,
    };

    return {
      holat: 'muvaffaqiyat',
      kalit: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto, currentUser: { role: string }) {
    if (currentUser.role !== UserRole.SUPERADMIN) {
      throw new UnauthorizedException('Faqat superadmin yangi foydalanuvchi qo\'sha oladi');
    }

    const exists = await this.knex('users')
      .where('username', registerDto.username)
      .orWhere('email', registerDto.email)
      .first();

    if (exists) {
      throw new ConflictException('Bu foydalanuvchi ismi yoki email allaqachon band');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    await this.knex('users').insert({
      ...registerDto,
      password: hashedPassword,
      role: registerDto.role || UserRole.ADMIN,
    });

    return {
      holat: 'muvaffaqiyat',
      xabar: 'Foydalanuvchi muvaffaqiyatli ro\'yxatdan o\'tdi.',
    };
  }

  async updatePassword(dto: UpdatePasswordDto, currentUser: { id: number; role: string }) {
    const user = await this.knex('users')
      .where('id', dto.user_id || currentUser.id)
      .first();

    if (!user) {
      throw new UnauthorizedException('Foydalanuvchi topilmadi');
    }

    // Superadmin boshqa foydalanuvchilar parolini o'zgartirmoqchi bo'lsa
    if (dto.user_id && currentUser.role !== UserRole.SUPERADMIN) {
      throw new UnauthorizedException('Faqat superadminlar boshqalarning parolini yangilay oladi');
    }

    // O'z parolini o'zgartirmoqchi bo'lsa
    if (!dto.user_id && dto.old_password) {
      const isValidPassword = await bcrypt.compare(dto.old_password, user.password);
      if (!isValidPassword) {
        throw new UnauthorizedException('Joriy parol noto\'g\'ri');
      }
    }

    const hashedPassword = await bcrypt.hash(dto.new_password, 10);

    await this.knex('users')
      .where('id', user.id)
      .update({
        password: hashedPassword,
        updated_at: this.knex.fn.now(),
      });

    return {
      holat: 'muvaffaqiyat',
      xabar: 'Parol muvaffaqiyatli yangilandi.',
    };
  }

  async updateProfile(dto: UpdateProfileDto, currentUser: { id: number }) {
    if (dto.username || dto.email) {
      const exists = await this.knex('users')
        .where(function() {
          if (dto.username) this.orWhere('username', dto.username);
          if (dto.email) this.orWhere('email', dto.email);
        })
        .whereNot('id', currentUser.id)
        .first();

      if (exists) {
        throw new ConflictException('Bu foydalanuvchi ismi yoki email allaqachon band');
      }
    }

    await this.knex('users')
      .where('id', currentUser.id)
      .update({
        ...dto,
        updated_at: this.knex.fn.now(),
      });

    return {
      holat: 'muvaffaqiyat',
      xabar: 'Profil muvaffaqiyatli yangilandi',
    };
  }
}
