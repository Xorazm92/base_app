import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlatformDto {
  @ApiProperty({
    type: String,
    description: 'Name of platform',
    example: 'Parrandachilik',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    description: 'Route of platform',
    example: 'https://parrandachilik.uz',
  })
  @IsNotEmpty()
  @IsString()
  route: string;
}
