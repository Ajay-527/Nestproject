import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSigInDto } from './dto/user.signin.dto';
import { UserEntity } from './entities/user.entity';
import { get } from 'http';
import { CurrentUser } from 'src/utility/decorator/current-user-decorator';
import { AuthenticationGuard } from 'src/utility/guards/authenticationguard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() body:any){
    console.log(body);
    return await this.usersService.signup(body);
  }

  @Post('signin')
  async signIn(@Body() UserSigInDto:any):Promise<{accessToken: string;user: UserEntity}>{
   const user =await this.usersService.signin(UserSigInDto);
   const accessToken=await this.usersService.accessToken(user);
   return{accessToken,user}
  }

  @UseGuards(AuthenticationGuard)
  @Get('me')
  getCurrentUserProfile(@CurrentUser() CurrentUser:UserEntity){
    return CurrentUser;
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.usersService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateUserDto: Partial<UserEntity>) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }


  @Get(':id')
  getListProdcutWithSpecifUse(@Param('id')id:string){
    
  }
}
