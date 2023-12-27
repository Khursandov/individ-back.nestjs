import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from '@shared/models/group.module';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseResponse } from '@core/responses/base.response';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel('Group') private readonly groupModel: Model<Group>,
  ) {}
  async create(createGroupDto: CreateGroupDto) {
    try {
      await this.groupModel.create(createGroupDto);
      return BaseResponse.success();
    } catch (error) {
      return BaseResponse.error(error);
    }
  }

  findAll() {
    return `This action returns all groups`;
  }

  findOne(id: number) {
    try {
      const group = this.groupModel.findById(id);
      return BaseResponse.success('success', group);
    } catch (error) {
      return BaseResponse.error(error);
    }
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    try {
      this.groupModel.findByIdAndDelete(id);
      return BaseResponse.success();
    } catch (error) {
      return BaseResponse.error(error);
    }
  }
}
