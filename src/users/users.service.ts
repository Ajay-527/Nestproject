import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSignUpDto } from './dto/user.signup.dto';
import { UserSigInDto } from './dto/user.signin.dto';
import { hash ,compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { waitForDebugger } from 'inspector';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async signup(body:UserSignUpDto){
    const user=this.usersRepository.create(body);
    return await this.usersRepository.save(user);
  }

  async signin(UserSigInDto:UserSigInDto): Promise<UserEntity>{
    const isUserExist1 =await this.usersRepository.createQueryBuilder('users').addSelect('users.password')
    .where('users.email=:email',{email:UserSigInDto.email}).getOne();
    if(isUserExist1.password===UserSigInDto.password){
      delete isUserExist1.password;
      return isUserExist1;
    }else{
      throw new BadRequestException("Not aviavlbe");
    }
  }
  async findAll() {
    return await this.usersRepository.find();
  }
  async findOne(id: number) {
    return await this.usersRepository.findOne({where:{id}})
  }

  async update(id: number, updateUserDto: Partial<UserEntity>) {
    await this.usersRepository.update(id, updateUserDto);
    return this.usersRepository.findOne({where :{id}});
  
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }

async findUserByEmail(email:string){
  return await this.usersRepository.findOneBy({email});
}


async accessToken(user:UserEntity): Promise<string>{
  return sign({id:user.id,email:user.email},'andhejhgfshusd25748645461ahjjdbjds',{expiresIn:'30m'})
}


}


