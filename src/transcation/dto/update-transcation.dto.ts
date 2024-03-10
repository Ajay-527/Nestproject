import { PartialType } from '@nestjs/mapped-types';
import { CreateTranscationDto } from './create-transcation.dto';

export class UpdateTranscationDto extends PartialType(CreateTranscationDto) {}
