import { Injectable } from '@nestjs/common';

import { ProductNotFoundException } from './product-not-found.exception';
import { PrismaError } from '../../prisma/prisma-error.enum';

import { UpdateProductDto } from './update-product.dto';
import { CreateProductDto } from './create-product.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.product.findMany();
  }

  async getById(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) {
      throw new ProductNotFoundException(id);
    }
    return product;
  }

  create(product: CreateProductDto) {
    return this.prismaService.product.create({
      data: product,
    });
  }

  async delete(id: number) {
    try {
      return await this.prismaService.product.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new ProductNotFoundException(id);
      }
      throw error;
    }
  }

  async update(id: number, product: UpdateProductDto) {
    try {
      return await this.prismaService.product.update({
        data: {
          ...product,
          id: undefined,
        },
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new ProductNotFoundException(id);
      }
      throw error;
    }
  }
}
