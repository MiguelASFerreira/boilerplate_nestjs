import ProductRepository from 'domain/entity/Product/ProductRepository';

export default class DeleteProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<void> {
    return await this.productRepository.DeleteProduct(id);
  }
}
