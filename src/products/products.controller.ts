import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './product.dto';
import { CreateProductDto } from './create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.getAll();
  }
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getById(id);
  }

  @Post()
  create(@Body() product: CreateProductDto) {
    return this.productsService.create(product);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() product: ProductDto) {
    return this.productsService.update(id, product);
  }
}
