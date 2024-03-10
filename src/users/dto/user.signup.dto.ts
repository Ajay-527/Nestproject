import { IsEmail, IsNotEmpty, IsString, isNotEmpty } from "class-validator";
import { Roles } from "../../utility/common/user-roles.enum";

export class UserSignUpDto{

    @IsNotEmpty({message:'Name can not be Null'})
    @IsString({message:'Name Should be String'})
    username:string;

    @IsNotEmpty({message:'Name can not be Null'})
    @IsEmail({},{message:'Name Should be String'})
    email:string;

    @IsNotEmpty({message:'Name can not be Null'})
    password:string;
}