import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class EditPasscodeDto {
  @ApiPropertyOptional({
    type: String,
    description: 'Passcode of user',
    example: '1111',
  })
  @IsOptional()
  passcode?: string;
}
