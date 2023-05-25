import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CustomerService } from '../../services/sales/customer';
import { CustomerDTO } from 'src/contexts/sales/dto/customer';

@Controller()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('customer')
  save(@Body() postData: any): Promise<CustomerDTO> {
    return this.customerService.save(postData);
  }

  @Put('customer')
  update(@Body() postData: any): Promise<CustomerDTO> {
    return this.customerService.save(postData);
  }

  @Get('customer/all')
  findAll(): Promise<CustomerDTO[]> {
    return this.customerService.findAll();
  }

  @Get('customer/count')
  count(): Promise<number> {
    return this.customerService.count();
  }

  @Delete('customer/:id')
  remove(@Param('id') id: string) {
    this.customerService.remove(id);
  }

  @Get('customer/:id')
  findById(@Param('id') id: string): Promise<CustomerDTO> {
    return this.customerService.findById(id);
  }
}
