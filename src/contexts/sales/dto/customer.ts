import { OrderDTO } from './order';
import { Address } from '../vo/address';
import { Genre } from '../vo/genre';
import { ComplaintDTO } from './complaint';

export class CustomerDTO {
  id?: string;
  only18Plus?: boolean;
  name: string;
  birthdate: Date;
  genre: Genre;
  addresses?: Address[];
  orders?: OrderDTO[];
  complaints?: ComplaintDTO[];

  constructor(name: string, birthdate: Date, genre: Genre) {
    this.name = name;
    this.birthdate = birthdate;
    this.genre = genre;
  }

  static fromORM(dataCustomer: any): CustomerDTO {
    const customerDto = new CustomerDTO(
      dataCustomer.name,
      new Date(dataCustomer.birthdate),
      dataCustomer.genre,
    );
    customerDto.id = dataCustomer.id;
    customerDto.only18Plus = dataCustomer.only18Plus;
    customerDto.addresses = dataCustomer.addresses;
    customerDto.orders = dataCustomer.orders;
    customerDto.complaints = dataCustomer.complaints;
    return customerDto;
  }

  toORM(): any {
    return {
      id: this.id,
      only18Plus: this.only18Plus,
      name: this.name,
      birthdate: this.birthdate,
      genre: this.genre,
      addresses: this.addresses as any[],
      orders: this.orders as any[],
      complaints: this.complaints as any[],
    } as any;
  }

  static fromUI(dataCustomer: any): CustomerDTO {
    const customerDto = new CustomerDTO(
      dataCustomer.name,
      new Date(dataCustomer.birthdate),
      dataCustomer.genre,
    );
    customerDto.id = dataCustomer.id;
    customerDto.only18Plus = dataCustomer.only18Plus;
    customerDto.addresses = dataCustomer.addresses;
    customerDto.orders = dataCustomer.orders;
    customerDto.complaints = dataCustomer.complaints;
    return customerDto;
  }

  toUI() {
    return {
      id: this.id,
      only18Plus: this.only18Plus,
      name: this.name,
      birthdate: this.birthdate,
      genre: this.genre,
      addresses: this.addresses as any[],
      orders: this.orders as any[],
      complaints: this.complaints as any[],
    };
  }
}
