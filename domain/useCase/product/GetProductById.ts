import Product from 'domain/entity/Product/Product';
import ProductRepository from 'domain/entity/Product/ProductRepository';

export default class GetProductById {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<Product | null> {
    return await this.productRepository.GetProductById(id);
  }
}
