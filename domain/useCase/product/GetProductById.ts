import Product from 'domain/entity/product/Product';
import ProductRepository from 'domain/entity/product/ProductRepository';

export default class GetProductById {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<Product | null> {
    return await this.productRepository.GetProductById(id);
  }
}
