import { OrderDTO } from './order';
import { Address } from '../vo/address';
import { ComplaintDTO } from './complaint';
export class ProviderDTO {
  id?: string;
  name: string;
  birthdate: Date;
  addresses?: Address[];
  orders?: OrderDTO[];
  complaints?: ComplaintDTO[];

  constructor(name: string, birthdate: Date) {
    this.name = name;
    this.birthdate = birthdate;
  }

  static fromORM(dataProvider: any) {
    return dataProvider as unknown as ProviderDTO;
  }

  toORM(): any {
    const objReturn: any = this as any;
    return objReturn;
  }

  static fromUI(dataProvider: any) {
    dataProvider.birthdate = new Date(dataProvider.birthdate);
    return dataProvider as unknown as ProviderDTO;
  }

  toUI() {
    return this as any;
  }
}
