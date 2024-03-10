import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';


describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  const mockUserService={
    findAll:jest.fn(),
    error:jest.fn(),
    
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{
        provide:UsersService,
        useValue:mockUserService
      }
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    
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


  it('should handle error', async () => {
    const errorMessage = 'Internal server error';
    jest.spyOn(mockUserService, 'error').mockRejectedValue(new Error(errorMessage));

    try {
      await controller.findAll;
    } catch (error) {
      expect(error.message).toBe(errorMessage);
    }
  });


});
