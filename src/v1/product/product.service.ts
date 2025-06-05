import { Injectable } from '@nestjs/common';
import CreateProduct from 'domain/useCase/product/CreateProduct';
import { InputCreateProduct } from 'domain/useCase/product/dto/CreateProduct.dto';
import type { InputUpdateProduct } from 'domain/useCase/product/dto/UpdateProduct.dto';
import GetProductById from 'domain/useCase/product/GetProductById';
import UpdateProduct from 'domain/useCase/product/UpdateProduct';
import { PrismaService } from 'infra/prisma.service';
import ProductRepositoryInPrisma from 'src/adapters/repository/product/ProductRepositoryInPrisma';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProduct(data: InputCreateProduct) {
    const productRepository = new ProductRepositoryInPrisma(this.prismaService);

    const useCase = new CreateProduct(productRepository);

    return await useCase.execute(data);
  }

  async getProductById(id: string) {
    const productRepository = new ProductRepositoryInPrisma(this.prismaService);

    const useCase = new GetProductById(productRepository);

    return await useCase.execute(id);
  }

  async updateProduct(id: string, data: InputUpdateProduct) {
    const productRepository = new ProductRepositoryInPrisma(this.prismaService);

    const useCase = new UpdateProduct(productRepository);

    return await useCase.execute(id, data);
  }
}
