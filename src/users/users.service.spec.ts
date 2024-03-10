import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

describe('UsersService', () => {
  let service: UsersService;
  let controller: UsersController;
  const mockUserService={
    findAll:jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{
        provide:UsersService,
        useValue:mockUserService
      }],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('Should be define',()=>{
    expect(controller).toBeDefined();
  });

  it('should return users data ', async () => {
    const userData = { id: 1, username: 'sachin', email:'sachin@gmail.com', password:'sachin@123', roles:'{user}' };
    const expData=[userData];
    jest.spyOn(mockUserService, 'findAll').mockResolvedValue(expData);
    const result = await controller.findAll();
    expect(result).toEqual(expData);
    expect(mockUserService.findAll).toBeCalled();
    
  });
});
