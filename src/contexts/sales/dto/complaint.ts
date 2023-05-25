import { CustomerDTO } from './customer';
import { ProviderDTO } from './provider';

export class ComplaintDTO {
  id?: string;
  customer_id?: string;
  provider_id?: string;
  customerDto: CustomerDTO;
  providerDto: ProviderDTO;
  content: string;

  constructor(
    customerDto: CustomerDTO,
    providerDto: ProviderDTO,
    content: string,
  ) {
    this.customer_id = customerDto.id;
    this.provider_id = providerDto.id;
    this.customerDto = customerDto;
    this.providerDto = providerDto;
    this.content = content;
  }

  static fromORM(dataComplaint: any): ComplaintDTO {
    return dataComplaint as unknown as ComplaintDTO;
  }

  toORM() {
    /// maybe need create like customer.ts
    return this as any;
  }

  static fromUI(dataComplaint: any): ComplaintDTO {
    return dataComplaint as unknown as ComplaintDTO;
  }

  toUI() {
    return this as any;
  }
}
