import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {

  @IsNotEmpty({message:'Staut can not be Null'})
  status: string;
    
  @IsNotEmpty({message:'Staut can not be Null'})
  user_id: number;
    
  @IsNotEmpty({message:'Staut can not be Null'})
  product_id: number;
    
}
