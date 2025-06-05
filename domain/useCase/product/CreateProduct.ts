import ProductRepository from 'domain/entity/product/ProductRepository';
import { InputCreateProduct } from './dto/CreateProduct.dto';
import Product from 'domain/entity/product/Product';

export default class CreateProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(data: InputCreateProduct): Promise<Product> {
    return await this.productRepository.CreateProduct(data);
  }
}
