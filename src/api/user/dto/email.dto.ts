import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class EmailDto {
  @ApiProperty({
    type: String,
    description: 'Email address of user',
    example: 'john@example.com',
  })
  @IsEmail()
  email: string;
}
