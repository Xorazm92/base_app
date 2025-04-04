import { IsEmail, IsString, MinLength } from 'class-validator';
import { UserRole } from '../enum/user-role.enum';

export class SignupDto {
  @IsString()
  full_name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class TokenDto {
  @IsString()
  refresh_token: string;
}

export class UpdatePasswordDto {
  @IsString()
  old_password?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  new_password: string;

  @IsOptional()
  user_id?: number;
}

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  full_name?: string;
}