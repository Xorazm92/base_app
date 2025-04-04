import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SigninAdminDto {
  @ApiProperty({
    type: String,
    description: 'Username of admin',
    example: 'admin1',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    type: String,
    description: 'Password of admin',
    example: 'Admin123!',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
