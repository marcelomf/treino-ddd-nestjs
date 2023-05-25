import { ComplaintDTO } from '../dto/complaint';
import { CustomerDTO } from '../dto/customer';
import { ProviderDTO } from '../dto/provider';

export class Complaint {
  private customer_id?: string;
  private provider_id?: string;
  private customerDto: CustomerDTO;
  private providerDto: ProviderDTO;
  private content: string;

  constructor(complaintDto: ComplaintDTO) {
    this.customer_id = complaintDto.customer_id;
    this.provider_id = complaintDto.provider_id;
    this.customerDto = complaintDto.customerDto;
    this.providerDto = complaintDto.providerDto;
    this.content = complaintDto.content;
  }

  toDto() {
    const complaintDto = new ComplaintDTO(
      this.customerDto,
      this.providerDto,
      this.content,
    );
    complaintDto.customer_id = this.customer_id;
    complaintDto.provider_id = this.provider_id;
    return complaintDto;
  }
}
