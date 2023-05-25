import { describe, expect, test } from '@jest/globals';
import { Provider } from '../src/contexts/sales/entities/provider';
import { Customer } from '../src/contexts/sales/entities/customer';
import { Order } from '../src/contexts/sales/entities/order';
import { Genre } from '../src/contexts/sales/vo/genre';
import { CustomerDTO } from '../src/contexts/sales/dto/customer';
import { ProviderDTO } from '../src/contexts/sales/dto/provider';
import { Complaint } from '../src/contexts/sales/entities/complaint';
import { ComplaintDTO } from '../src/contexts/sales/dto/complaint';
import { OrderDTO } from '../src/contexts/sales/dto/order';

describe('provider entity', () => {
  test('rating provider', () => {
    const provider = new Provider(
      new ProviderDTO('Loja Cabulosa', new Date('1999-01-20')),
    );
    provider.addOrder(new Order(new OrderDTO()));
    provider.addOrder(new Order(new OrderDTO()));
    provider.addOrder(new Order(new OrderDTO()));
    provider.addOrder(new Order(new OrderDTO()));
    provider.addOrder(new Order(new OrderDTO()));
    const customer = new Customer(
      new CustomerDTO('Marcelo', new Date('1986-01-20'), Genre.MALE),
    );
    customer.addOrder(new Order(new OrderDTO()));
    customer.addOrder(new Order(new OrderDTO()));
    customer.addOrder(new Order(new OrderDTO()));

    expect(provider.totalOrders()).toBe(5);
    expect(customer.getRating()).toMatch(/VIP/);
  });

  test('provider complaints', () => {
    const providerDto = new ProviderDTO(
      'Loja Cabulosa',
      new Date('1999-01-20'),
    );
    const provider = new Provider(providerDto);
    const complaint = new Complaint(
      new ComplaintDTO(
        new CustomerDTO('Marcelo', new Date('1986-01-20'), Genre.MALE),
        providerDto,
        'Pedido veio estragado!',
      ),
    );

    const complaint2 = new Complaint(
      new ComplaintDTO(
        new CustomerDTO('Marcelo', new Date('1986-01-20'), Genre.MALE),
        providerDto,
        'Pedido veio estragado!',
      ),
    );

    const complaint3 = new Complaint(
      new ComplaintDTO(
        new CustomerDTO('Marcelo', new Date('1986-01-20'), Genre.MALE),
        providerDto,
        'Pedido veio estragado!',
      ),
    );

    provider.addComplaint(complaint);
    provider.addComplaint(complaint2);
    provider.addComplaint(complaint3);
    expect(() => provider.validSales()).toThrow(
      "Provider can't be able to process sale. Excepted max numbers(3) of complaints!",
    );
  });
});
