import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { IsPhoneNumber } from 'src/common/decorator/is-phone-number';

export class PasscodeDto {
  @ApiProperty({
    type: String,
    description: 'Full name of user',
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @ApiProperty({
    type: String,
    description: 'Phone number of user',
    example: '+998901234567',
  })
  @IsPhoneNumber()
  phone_number: string;

  @ApiProperty({
    type: String,
    description: 'Passcode of user',
    example: '1234',
  })
  @IsNotEmpty()
  @IsNumberString()
  passcode: number;
}
