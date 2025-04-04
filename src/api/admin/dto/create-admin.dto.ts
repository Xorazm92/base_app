import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({
    type: String,
    description: 'Username of admin',
    example: 'admin1',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  username: string;

  @ApiProperty({
    type: String,
    description: 'Password of admin',
    example: 'Admin123!',
  })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Phone number of admin',
    example: '+998901234567',
  })
  @IsOptional()
  phone_number?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Email address of admin',
    example: 'admin@example.com',
  })
  @IsOptional()
  email?: string;
}
