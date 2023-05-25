import { Customer as CustomerModel } from '@prisma/client';
import { PersistenceDb, Orm } from '../../../utils/persistence_db';
import { CustomerDTO } from '../dto/customer';
export class CustomerDAO extends Orm implements PersistenceDb {
  async saveDb(customerDto: CustomerDTO): Promise<CustomerModel> {
    const dataCustomer = customerDto.toORM();
    dataCustomer.addresses = { create: dataCustomer.addresses };
    dataCustomer.orders = { create: dataCustomer.orders };
    dataCustomer.complaints = { create: dataCustomer.complaints };

    if (dataCustomer.id) {
      return await this.prisma.customer.update({
        data: dataCustomer,
        where: { id: dataCustomer.id },
      });
    } else {
      return await this.prisma.customer.create({
        data: dataCustomer,
        include: {
          addresses: true,
        },
      });
    }
  }

  async removeDb(customerId: string) {
    await this.prisma.customer.delete({
      where: {
        id: customerId,
      },
      include: {
        addresses: true,
      },
    });
  }

  async findByIdDb(customerId: string) {
    return await this.prisma.customer.findUnique({
      where: {
        id: customerId,
      },
      include: {
        addresses: true,
      },
    });
  }

  async findAllDb() {
    return await this.prisma.customer.findMany({
      include: {
        addresses: true,
      },
    });
  }

  async countDb() {
    return await this.prisma.customer.count();
  }
}
