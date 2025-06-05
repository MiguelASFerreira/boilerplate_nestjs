import Product from './Product';

export default interface ProductRepository {
  CreateProduct(data: Product): Promise<Product>;
}
