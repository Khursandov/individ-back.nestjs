import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Group } from '@shared/models/group.module';

@Schema({ timestamps: true, collection: 'student' })
export class Student extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  dop: string;

  @Prop()
  phone: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Group' })
  groupId: Group;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
