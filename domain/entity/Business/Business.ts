import Product from '../Product/Product';

export default class Business {
  id?: string;
  name: string;
  description?: string | null;
  products?: Product[];

  constructor(
    id: string | undefined,
    name: string,
    description: string | null,
    products?: Product[],
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.products = products || [];
  }
}
