import Business from './Business';

export default interface BusinessRepository {
  CreateBusiness(data: Business): Promise<Business>;
  GetBusinessById(id: string): Promise<Business | null>;
  UpdateBusiness(id: string, data: Business): Promise<Business>;
  DeleteBusiness(id: string): Promise<void>;
}
