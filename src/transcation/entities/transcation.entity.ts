import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('transcation')
export class Transcation {

  @PrimaryGeneratedColumn()
  trans_id: number;

  @Column()
  product_name: string;
}
