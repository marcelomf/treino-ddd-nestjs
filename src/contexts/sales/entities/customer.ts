import { Person } from './person';
import { Order } from './order';
import dayjs from 'dayjs';
import { CustomerDTO } from '../dto/customer';
import { OrderDTO } from '../dto/order';
import { CustomerService } from './customer_service';
import { Complaint } from './complaint';
import { Address } from '../vo/address';
import { ComplaintDTO } from '../dto/complaint';

export class Customer extends Person implements CustomerService {
  private only18Plus?: boolean;
  private orders: Order[];
  private complaints: Complaint[];

  constructor(customerDto: CustomerDTO) {
    super(customerDto.name, customerDto.birthdate, customerDto.genre);
    this.id = customerDto.id;
    this.only18Plus = customerDto.only18Plus;
    this.addresses = customerDto.addresses;
    this.orders = customerDto.orders as unknown[] as Order[];
    this.complaints = customerDto.complaints as unknown[] as Complaint[];

    if (this.only18Plus) {
      if (dayjs(new Date()).diff(this.birthdate, 'years') < 18) {
        throw new Error(
          'Operation only available to persons over 18 years of age.',
        );
      }
    }
  }

  addComplaint(complaint: Complaint) {
    if (!this.complaints) this.complaints = [];
    this.complaints.push(complaint);
  }

  toDto() {
    const customerDto = new CustomerDTO(this.name, this.birthdate, this.genre!);
    customerDto.id = this.id;
    customerDto.only18Plus = this.only18Plus;
    customerDto.addresses = this.addresses as unknown[] as Address[];
    customerDto.orders = this.orders as unknown[] as OrderDTO[];
    customerDto.complaints = this.complaints as unknown[] as ComplaintDTO[];
    return customerDto;
  }

  addOrder(order: Order) {
    if (!this.orders) this.orders = [];
    this.orders.push(order);
  }

  totalOrders() {
    if (!this.orders) return 0;
    return this.orders?.length;
  }

  getRating() {
    let rating: 'NORMAL' | 'VIP' = 'NORMAL';
    if (!this.orders) return rating;
    if (this.orders?.length >= 3) {
      rating = 'VIP';
    }
    return rating;
  }
}
