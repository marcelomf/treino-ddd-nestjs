import { Injectable } from '@nestjs/common';
import { Customer } from '../../contexts/sales/entities/customer';
import { CustomerDTO } from '../../contexts/sales/dto/customer';
import { CustomerRepository } from '../../contexts/sales/repositories/customer';

@Injectable()
export class CustomerService {
  save(dataCustomerUI: any): Promise<CustomerDTO> {
    const customerDto = CustomerDTO.fromUI(dataCustomerUI);
    const customer = new Customer(customerDto);
    const customerRepository = new CustomerRepository();
    return customerRepository.saveDb(customer.toDto());
  }

  remove(customerId: string) {
    const customerRepository = new CustomerRepository();
    return customerRepository.removeDb(customerId);
  }

  findById(customerId: string): Promise<CustomerDTO> {
    const customerRepository = new CustomerRepository();
    return customerRepository.findByIdDb(customerId);
  }

  findAll(): Promise<CustomerDTO[]> {
    const customerRepository = new CustomerRepository();
    return customerRepository.findAllDb();
  }

  count(): Promise<number> {
    const customerRepository = new CustomerRepository();
    return customerRepository.countDb();
  }
}
