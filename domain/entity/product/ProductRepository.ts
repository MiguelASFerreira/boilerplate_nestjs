import Product from './Product';

export default interface ProductRepository {
  CreateProduct(data: Product): Promise<Product>;
  GetProductById(id: string): Promise<Product | null>;
  UpdateProduct(id: string, data: Product): Promise<Product>;
  DeleteProduct(id: string): Promise<void>;
}
