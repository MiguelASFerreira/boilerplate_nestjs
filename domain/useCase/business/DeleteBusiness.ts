import BusinessRepository from 'domain/entity/Business/BusinessRepository';

export default class DeleteBusiness {
  constructor(private readonly businessRepository: BusinessRepository) {}

  async execute(id: string): Promise<void> {
    return await this.businessRepository.DeleteBusiness(id);
  }
}
