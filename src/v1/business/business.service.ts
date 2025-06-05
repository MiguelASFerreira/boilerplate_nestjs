import { Injectable } from '@nestjs/common';
import CreateBusiness from 'domain/useCase/business/CreateBusiness';
import { InputCreateBusiness } from 'domain/useCase/business/dto/CreateBusiness.dto';
import { InputUpdateBusiness } from 'domain/useCase/business/dto/UpdateBusiness.dto';
import GetBusinessById from 'domain/useCase/business/GetBusinessById';
import UpdateBusiness from 'domain/useCase/business/UpdateBusiness';
import { PrismaService } from 'infra/prisma.service';
import BusinessRepositoryInPrisma from 'src/adapters/repository/business/BusinessRepositoryInPrisma';

@Injectable()
export class BusinessService {
  constructor(private readonly prismaService: PrismaService) {}

  async createBusiness(data: InputCreateBusiness) {
    const businessRepository = new BusinessRepositoryInPrisma(
      this.prismaService,
    );

    const useCase = new CreateBusiness(businessRepository);

    return await useCase.execute(data);
  }

  async getBusinessById(id: string) {
    const businessRepository = new BusinessRepositoryInPrisma(
      this.prismaService,
    );

    const useCase = new GetBusinessById(businessRepository);

    return await useCase.execute(id);
  }

  async updateBusiness(id: string, data: InputUpdateBusiness) {
    const businessRepository = new BusinessRepositoryInPrisma(
      this.prismaService,
    );

    const useCase = new UpdateBusiness(businessRepository);

    return await useCase.execute(id, data);
  }
}
