import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber } from 'src/common/decorator/is-phone-number';

export class SigninDto {
  @ApiProperty({
    type: String,
    description: 'Phone number of user',
    example: '+998901234567',
  })
  @IsPhoneNumber()
  phone_number: string;
}
