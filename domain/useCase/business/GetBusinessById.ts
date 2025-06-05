import BusinessRepository from 'domain/entity/Business/BusinessRepository';

export default class GetBusinessById {
  constructor(private readonly businessRepository: BusinessRepository) {}

  async execute(id: string) {
    return await this.businessRepository.GetBusinessById(id);
  }
}
