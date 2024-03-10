import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsService } from 'src/products/products.service';
import { UsersService } from 'src/users/users.service';
import { setDefaultAutoSelectFamilyAttemptTimeout } from 'net';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)private orderRepository: Repository<Order>,
    private readonly userservice:UsersService,
    private readonly productService:ProductsService
  ) {}
  
 async create(createOrderDto: CreateOrderDto) {
  const userid= await this.userservice.findOne(+createOrderDto.user_id);
  const productid =await this.productService.findById(+createOrderDto.product_id);
  const newOrder= new Order();
  newOrder.orderBy=userid;
  newOrder.prodId=productid;
  newOrder.status=createOrderDto.status;
  const orderQuery= await this.orderRepository.createQueryBuilder().insert().into(Order).values(newOrder).execute()
  return  orderQuery.identifiers;
  }

  async findAll() {
    return await this.orderRepository.find();
  }

  async findOne(order_id: number) {
    return this.orderRepository.findOne({where:{order_id}})
  }

  async update(order_id: number, updateOrderDto: UpdateOrderDto) {

    await this.orderRepository.update(order_id, updateOrderDto);
    return this.orderRepository.findOne({where :{order_id}});

  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }


  async getListProdcutWithSpecifUse(id:number){
    const valData =await this.orderRepository.createQueryBuilder('order')
    .where('order.id = :id', { id }).getMany();    
      return valData
  }

}
