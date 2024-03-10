import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findById(product_id:number): Promise<Product> {
    return this.productRepository.findOne({where :{product_id}});
  }

  async create(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return this.productRepository.save(product);
  }

  async update(product_id: number, productData: Partial<Product>): Promise<Product> {
    await this.productRepository.update(product_id, productData);
    return this.productRepository.findOne({where :{product_id}});
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}