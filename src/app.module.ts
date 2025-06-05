import { Module } from '@nestjs/common';
import { ProductModule } from './v1/product/product.module';
import { PrismaModule } from 'infra/prisma.module';
import { BusinessModule } from './v1/business/business.module';

@Module({
  imports: [PrismaModule, ProductModule, BusinessModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
