import { IsOptional, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  status: string;

  @IsOptional()
  isArchived: boolean;
}
