import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from '../../services/sales/order';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('order')
  save(@Body() postData: any) {
    this.orderService.save(postData);
  }
}
