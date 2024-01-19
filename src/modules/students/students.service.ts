import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from '@shared/models/student.module';
import { Model } from 'mongoose';
import { BaseResponse } from '@core/responses/base.response';

@Injectable()
export class StudentsService {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}
  async create(createStudentDto: CreateStudentDto) {
    try {
      await this.studentModel.create(createStudentDto);
      return BaseResponse.success();
    } catch (error) {
      return BaseResponse.error(error);
    }
  }

  findAll() {
    return `This action returns all students`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
