import { Module } from '@nestjs/common';
import { TranscationService } from './transcation.service';
import { TranscationController } from './transcation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'typeorm';
import { Transcation } from './entities/transcation.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Transcation])],
  controllers: [TranscationController],
  providers: [TranscationService],
})
export class TranscationModule {}
