import { IsEmail, IsNotEmpty, IsString, isNotEmpty } from "class-validator";
import { Roles } from "../../utility/common/user-roles.enum";

export class UserSigInDto{
    
    //@IsNotEmpty({message:'email can not be Null'})
    //@IsEmail({},{message:'email Should be String'})
    email:string;

    //@IsNotEmpty({message:'password can not be empty'})
    password:string;
}