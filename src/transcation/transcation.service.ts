import { Injectable } from '@nestjs/common';
import { CreateTranscationDto } from './dto/create-transcation.dto';
import { UpdateTranscationDto } from './dto/update-transcation.dto';

@Injectable()
export class TranscationService {
  create(createTranscationDto: CreateTranscationDto) {
    return 'This action adds a new transcation';
  }

  findAll() {
    return `This action returns all transcation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transcation`;
  }

  update(id: number, updateTranscationDto: UpdateTranscationDto) {
    return `This action updates a #${id} transcation`;
  }

  remove(id: number) {
    return `This action removes a #${id} transcation`;
  }
}
