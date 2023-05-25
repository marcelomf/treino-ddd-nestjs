import { OrderItemDTO } from './order_item';
export class OrderDTO {
  id?: string;
  provider_id?: string;
  customer_id?: string;
  total?: number;
  items?: OrderItemDTO[];

  static fromORM(dataOrder: any) {
    return dataOrder as unknown as OrderDTO;
  }

  toORM(): any {
    const objReturn: any = this as any;
    return objReturn;
  }

  static fromUI(dataOrder: any) {
    return dataOrder as unknown as OrderDTO;
  }

  toUI() {
    return this as any;
  }
}
