import Product from 'domain/entity/product/Product';
import ProductRepository from 'domain/entity/product/ProductRepository';
import { InputUpdateProduct } from './dto/UpdateProduct.dto';

export default class UpdateProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string, data: InputUpdateProduct): Promise<Product | null> {
    return await this.productRepository.UpdateProduct(id, data);
  }
}
