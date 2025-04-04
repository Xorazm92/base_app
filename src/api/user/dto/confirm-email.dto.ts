import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class ConfirmEmailDto {
  @ApiProperty({
    type: String,
    description: 'Email address of user',
    example: 'john@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'OTP of user',
    example: '111111',
  })
  @IsNotEmpty({})
  @IsNumberString()
  otp: number;
}
