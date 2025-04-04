import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateCommandDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  command: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class UpdateCommandDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  command?: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
