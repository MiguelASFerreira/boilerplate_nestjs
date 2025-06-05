import BusinessRepository from 'domain/entity/Business/BusinessRepository';
import { InputCreateBusiness } from './dto/CreateBusiness.dto';
import Business from 'domain/entity/Business/Business';

export default class CreateBusiness {
  constructor(private readonly businessRepository: BusinessRepository) {}

  async execute(data: InputCreateBusiness): Promise<Business> {
    return await this.businessRepository.CreateBusiness(data);
  }
}
