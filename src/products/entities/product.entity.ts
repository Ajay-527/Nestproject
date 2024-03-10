import { Order } from "src/order/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("product")
export class Product {
  
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  product_name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock_quantity: number;

  @OneToMany(() => Order, order => order.prodId)
  orders: Order[]; 
  

}
