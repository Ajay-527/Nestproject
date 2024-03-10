import { Test, TestingModule } from '@nestjs/testing';
import { TranscationController } from './transcation.controller';
import { TranscationService } from './transcation.service';

describe('TranscationController', () => {
  let controller: TranscationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TranscationController],
      providers: [TranscationService],
    }).compile();

    controller = module.get<TranscationController>(TranscationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
