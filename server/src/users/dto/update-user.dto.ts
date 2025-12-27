import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString, MinLength, MaxLength } from 'class-validator';

// Omitimos email y password del DTO base
class UpdateUserBaseDto extends PartialType(
  OmitType(CreateUserDto, ['email', 'password'] as const),
) {}

export class UpdateUserDto extends UpdateUserBaseDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  password?: string;
}