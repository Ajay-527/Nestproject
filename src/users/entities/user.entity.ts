import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "../../utility/common/user-roles.enum";
import { Order } from "src/order/entities/order.entity";


@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    username: string;
  
    @Column()
    email: string;

    @Column()
    password:String;

    @Column({type:'enum',enum:Roles,array:true,default:[Roles.USER]})
    roles:Roles

    @OneToMany(() => Order, order => order.orderBy)
    orders: Order[];    

    


}
