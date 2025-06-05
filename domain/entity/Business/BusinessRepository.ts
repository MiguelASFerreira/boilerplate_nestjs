import Business from './Business';

export default interface BusinessRepository {
  CreateBusiness(data: Business): Promise<Business>;
}
