import { Person } from './person';
import { CustomerService } from './customer_service';
import { Order } from './order';
import { ProviderDTO } from '../dto/provider';
import { Complaint } from './complaint';
import { ComplaintDTO } from '../dto/complaint';
import { OrderDTO } from '../dto/order';

export class Provider extends Person implements CustomerService {
  private orders: Order[];
  private complaints: Complaint[];

  constructor(providerDto: ProviderDTO) {
    super(providerDto.name, providerDto.birthdate);
    this.id = providerDto.id;
    this.addresses = providerDto.addresses;
    this.orders = providerDto.orders as unknown[] as Order[];
    this.complaints = providerDto.complaints as unknown[] as Complaint[];
  }

  toDto() {
    const providerDto = new ProviderDTO(this.name, this.birthdate);
    providerDto.id = this.id;
    providerDto.addresses = this.addresses as any[];
    providerDto.orders = this.orders as unknown[] as OrderDTO[];
    providerDto.complaints = this.complaints as unknown[] as ComplaintDTO[];
    return providerDto;
  }

  addComplaint(complaint: Complaint) {
    if (!this.complaints) this.complaints = [];
    this.complaints.push(complaint);
  }

  totalOrders() {
    return this.orders.length;
  }

  addOrder(order: Order) {
    if (!this.orders) this.orders = [];
    this.orders.push(order);
  }

  validSales() {
    if (this.complaints && this.complaints.length >= 3) {
      throw new Error(
        "Provider can't be able to process sale. Excepted max numbers(3) of complaints!",
      );
    }
  }
}
