import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class FullnameDto {
  @ApiPropertyOptional({
    type: String,
    description: 'Full name of user',
    example: 'John Doe',
  })
  @IsOptional()
  full_name?: string;
}
