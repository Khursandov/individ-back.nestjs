import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'group' })
export class Group extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop()
  isArchived: boolean;

  @Prop()
  createdBy: string;

  @Prop()
  updatedBy: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
