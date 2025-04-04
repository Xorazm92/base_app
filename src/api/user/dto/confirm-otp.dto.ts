import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';
import { IsPhoneNumber } from 'src/common/decorator/is-phone-number';

export class ConfirmOTPDto {
  @ApiProperty({
    type: String,
    description: 'Phone number of user',
    example: '+998901234567',
  })
  @IsPhoneNumber()
  phone_number: string;

  @ApiProperty({
    type: String,
    description: 'OTP of user',
    example: '111111',
  })
  @IsNotEmpty()
  @IsNumberString()
  otp: number;
}
