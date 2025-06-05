export default class Business {
  id?: string;
  name: string;
  description?: string | null;

  constructor(
    id: string | undefined,
    name: string,
    description: string | null,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
