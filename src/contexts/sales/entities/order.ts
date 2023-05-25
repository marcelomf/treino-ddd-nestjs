import { OrderDTO } from '../dto/order';
import { OrderItemDTO } from '../dto/order_item';
import { OrderItem } from './order_item';

export class Order {
  protected id?: string;
  protected provider_id?: string;
  protected customer_id?: string;
  protected total?: number;
  protected items?: OrderItem[];

  constructor(orderDto: OrderDTO) {
    this.id = orderDto?.id;
    this.provider_id = orderDto?.provider_id;
    this.customer_id = orderDto?.customer_id;
    this.total = orderDto?.total;
    this.items = orderDto?.items?.map((i) => {
      return new OrderItem(i.name as string, i.price as number);
    });
  }

  toDto() {
    const orderDto = new OrderDTO();
    orderDto.id = this.id;
    orderDto.provider_id = this.provider_id;
    orderDto.customer_id = this.customer_id;
    orderDto.total = this.total;
    orderDto.items = this.items as unknown[] as OrderItemDTO[];
    return orderDto;
  }

  addItem(orderItem: OrderItem) {
    if (!this.items) this.items = [];
    this.items.push(orderItem);
  }

  totalPrice() {
    let totalPrice = 0;
    if (!this.items) return totalPrice;
    for (const item of this.items) {
      totalPrice += item.getPrice();
    }
    return totalPrice;
  }

  processSale() {
    this.total = this.totalPrice();
  }
}
