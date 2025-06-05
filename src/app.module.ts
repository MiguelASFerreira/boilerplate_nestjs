import { Module } from '@nestjs/common';
import { ProductModule } from './v1/product/product.module';
import { PrismaModule } from 'infra/prisma.module';

@Module({
  imports: [PrismaModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
