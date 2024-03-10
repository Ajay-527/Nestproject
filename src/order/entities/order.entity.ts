import { Product } from "src/products/entities/product.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { PrimaryGeneratedColumn, ManyToOne, Column, OneToMany, Entity, JoinColumn } from "typeorm";

@Entity('order')
export class Order {
    
  @PrimaryGeneratedColumn()
  order_id: number;
  
  @Column()
  status: string;

  @ManyToOne(() => UserEntity, user => user.orders)
  @JoinColumn({ name: 'id' })
  orderBy:UserEntity;

  @ManyToOne(() => Product, prod => prod.orders)
  @JoinColumn({ name: 'product_id' })
  prodId:Product;

}
