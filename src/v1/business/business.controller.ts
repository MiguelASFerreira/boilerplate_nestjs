import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessBody } from './dto/business.dto';

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get(':businessId')
  async GetBusinessById(@Param('businessId') businessId: string) {
    try {
      return await this.businessService.getBusinessById(businessId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  async CreateBusiness(@Body() data: CreateBusinessBody) {
    try {
      return await this.businessService.createBusiness(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
