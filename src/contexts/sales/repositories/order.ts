import { OrderUOW } from '../dao/order_uow';
import { OrderDTO } from '../dto/order';

export class OrderRepository {
  orderUow: OrderUOW;

  constructor() {
    this.orderUow = new OrderUOW();
  }

  async saveDb(orderDto: OrderDTO) {
    await this.orderUow.saveDb(orderDto);
  }
}
