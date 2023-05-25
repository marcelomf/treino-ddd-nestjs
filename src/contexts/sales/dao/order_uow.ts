/**
 * Sample of pattern: Unit Of Work
 */

import { Orm } from '../../../utils/persistence_db';
import { OrderDTO } from '../dto/order';
export class OrderUOW extends Orm {
  async saveDb(orderDto: OrderDTO) {
    const dataOrder = orderDto.toORM();
    let dataOrderItems: any[] = JSON.parse(JSON.stringify(dataOrder.items));
    delete dataOrder.items;

    await this.prisma.$transaction(async (tx: any) => {
      const order = await tx.order.create({
        data: dataOrder,
      });

      dataOrderItems = dataOrderItems.map((i) => {
        return { ...i, order_id: order.id };
      });

      for (const item of dataOrderItems) {
        await tx.orderItem.create({
          data: item,
        });
        // throw new Error("ERROR TEST");
      }
    });
  }
}
