
import { IsString, IsEmail, MinLength } from 'class-validator';

export class SigninDto {
  @IsString()
  full_name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  password_hash?: string;
  refresh_token?: string;
  refresh_token_expires?: Date;
  role_id?: number;
  phone_number?: string;
}
