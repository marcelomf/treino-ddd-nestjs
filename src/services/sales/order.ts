import { Injectable } from '@nestjs/common';
import { Order } from '../../contexts/sales/entities/order';
import { OrderDTO } from '../../contexts/sales/dto/order';
import { OrderRepository } from '../../contexts/sales/repositories/order';

@Injectable()
export class OrderService {
  save(dataOrderUI: any) {
    const orderDto = OrderDTO.fromUI(dataOrderUI);
    const order = new Order(orderDto);
    order.processSale();
    const orderRepository = new OrderRepository();
    orderRepository.saveDb(order.toDto());
  }
}
