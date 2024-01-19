import { IsString } from 'class-validator';
import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Group } from '@shared/models/group.module';

export class CreateStudentDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @Prop()
  dop: string;

  @Prop()
  phone: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Group' })
  groupId: Group;
}
