import { Injectable } from '@nestjs/common';
import CreateBusiness from 'domain/useCase/business/CreateBusiness';
import { InputCreateBusiness } from 'domain/useCase/business/dto/CreateBusiness.dto';
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
}
