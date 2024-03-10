import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('all')
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':product_id')
  findOne(@Param('product_id', ParseIntPipe) product_id: number): Promise<Product> {
    return this.productsService.findById(product_id);
  }

  @Post('add')
  create(@Body() productData: Partial<Product>): Promise<Product> {
    return this.productsService.create(productData);
  }

  @Patch('update/:product_id')
  update(@Param('product_id',ParseIntPipe) product_id: number, @Body() productData: Partial<Product>): Promise<Product> {
    return this.productsService.update(+product_id, productData);
  }

  @Delete(':product_id')
  remove(@Param('product_id', ParseIntPipe) product_id: number): Promise<void> {
    return this.productsService.remove(+product_id);
    
  }
}