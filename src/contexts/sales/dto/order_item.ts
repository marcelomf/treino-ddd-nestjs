export class OrderItemDTO {
  id?: string;
  name?: string;
  price?: number;

  static fromORM(dataOrderItem: any) {
    const orderItemDto = new OrderItemDTO();
    orderItemDto.id = dataOrderItem.id;
    orderItemDto.name = dataOrderItem.name;
    orderItemDto.price = dataOrderItem.price;
    return orderItemDto;
  }

  toORM() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
    };
  }

  static fromUI(dataOrderItem: any) {
    const orderItemDto = new OrderItemDTO();
    orderItemDto.id = dataOrderItem.id;
    orderItemDto.name = dataOrderItem.name;
    orderItemDto.price = dataOrderItem.price;
    return orderItemDto;
  }

  toUI() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
    };
  }
}
