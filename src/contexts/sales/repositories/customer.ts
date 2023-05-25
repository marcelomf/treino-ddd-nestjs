import { CustomerDAO } from '../dao/customer';
import { CustomerDTO } from '../dto/customer';

export class CustomerRepository {
  customerDao: CustomerDAO;

  constructor() {
    this.customerDao = new CustomerDAO();
  }

  async saveDb(customerDto: CustomerDTO): Promise<CustomerDTO> {
    return (await this.customerDao.saveDb(
      customerDto,
    )) as unknown as CustomerDTO;
  }

  async removeDb(customerId: string) {
    await this.customerDao.removeDb(customerId);
  }

  async findByIdDb(customerId: string): Promise<CustomerDTO> {
    return (await this.customerDao.findByIdDb(
      customerId,
    )) as unknown as CustomerDTO;
  }

  async findAllDb(): Promise<CustomerDTO[]> {
    const result =
      (await this.customerDao.findAllDb()) as unknown as CustomerDTO[];
    return result;
  }

  async countDb(): Promise<number> {
    return await this.customerDao.countDb();
  }
}
