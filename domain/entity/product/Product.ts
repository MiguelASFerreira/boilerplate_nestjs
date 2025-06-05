export default class Product {
  id?: string;
  name: string;
  description?: string | null;
  price: number;
  businessId: string;

  constructor(
    id: string | undefined,
    name: string,
    description: string | null,
    price: number,
    businessId: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.businessId = businessId;
  }
}
