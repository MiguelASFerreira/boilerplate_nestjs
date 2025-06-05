import Product from 'domain/entity/Product/Product';
import ProductRepository from 'domain/entity/Product/ProductRepository';
import { InputUpdateProduct } from './dto/UpdateProduct.dto';

export default class UpdateProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string, data: InputUpdateProduct): Promise<Product | null> {
    return await this.productRepository.UpdateProduct(id, data);
  }
}
