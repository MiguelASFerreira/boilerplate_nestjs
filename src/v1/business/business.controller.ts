import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessBody, UpdateBusinessBody } from './dto/business.dto';

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

  @Put(':businessId')
  async UpdateBusiness(
    @Param('businessId') businessId: string,
    @Body() data: UpdateBusinessBody,
  ) {
    try {
      return await this.businessService.updateBusiness(businessId, data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':businessId')
  async DeleteBusiness(@Param('businessId') businessId: string) {
    try {
      return await this.businessService.deleteBusiness(businessId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
