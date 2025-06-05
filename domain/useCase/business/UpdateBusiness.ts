import BusinessRepository from 'domain/entity/Business/BusinessRepository';
import Business from 'domain/entity/Business/Business';
import { InputUpdateBusiness } from './dto/UpdateBusiness.dto';

export default class UpdateBusiness {
  constructor(private readonly businessRepository: BusinessRepository) {}

  async execute(id: string, data: InputUpdateBusiness): Promise<Business> {
    return await this.businessRepository.UpdateBusiness(id, data);
  }
}
