export default class Product {
  name: string;
  description?: string | null;
  price: number;
  businessId: string;

  constructor(
    name: string,
    description: string | null,
    price: number,
    businessId: string,
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.businessId = businessId;
  }
}
