import Product from 'domain/entity/product/Product';
import ProductRepository from 'domain/entity/product/ProductRepository';
import { PrismaService } from 'infra/prisma.service';

export default class ProductRepositoryInPrisma implements ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async CreateProduct(data: Product): Promise<Product> {
    const result = await this.prismaService.product.create({
      data: {
        name: data.name,
        description: data.description || '',
        price: data.price,
        businessId: data.businessId,
      },
    });

    return new Product(
      result.name,
      result.description,
      result.price,
      result.businessId,
    );
  }

  async GetProductById(id: string): Promise<Product | null> {
    const result = await this.prismaService.product.findUnique({
      where: { id },
    });

    if (!result) {
      return null;
    }

    return new Product(
      result.name,
      result.description,
      result.price,
      result.businessId,
    );
  }
}
