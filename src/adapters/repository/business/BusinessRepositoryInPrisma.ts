import Business from 'domain/entity/Business/Business';
import BusinessRepository from 'domain/entity/Business/BusinessRepository';
import { PrismaService } from 'infra/prisma.service';

export default class BusinessRepositoryInPrisma implements BusinessRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async CreateBusiness(data: Business): Promise<Business> {
    const result = await this.prismaService.business.create({
      data: {
        name: data.name,
        description: data.description || '',
      },
    });

    return new Business(result.id, result.name, result.description || '');
  }

  async GetBusinessById(id: string): Promise<Business | null> {
    const result = await this.prismaService.business.findUnique({
      where: { id },
      include: {
        products: true,
      },
    });

    if (!result) {
      return null;
    }
    return new Business(
      result.id,
      result.name,
      result.description || '',
      result.products,
    );
  }

  async UpdateBusiness(id: string, data: Business): Promise<Business> {
    const result = await this.prismaService.business.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description || '',
      },
      include: {
        products: true,
      },
    });

    return new Business(
      result.id,
      result.name,
      result.description || '',
      result.products,
    );
  }
}
