import { PartialType } from '@nestjs/mapped-types';
import { CreatePlatformDto } from './create-platform.dto';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlatformDto extends PartialType(CreatePlatformDto) {
  @ApiProperty({
    type: Boolean,
    description: 'Status of platform',
    example: false,
  })
  @IsOptional()
  is_active: boolean;
}
