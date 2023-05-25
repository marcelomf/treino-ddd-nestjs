import { Genre } from '../vo/genre';
import { Address } from '../vo/address';

export abstract class Person {
  protected id: string | undefined;
  protected name: string;
  protected genre: Genre | undefined;
  protected birthdate: Date;
  protected addresses: Address[] | undefined;

  constructor(name: string, birthdate: Date);

  constructor(name: string, birthdate: Date, genre: Genre);

  constructor(...myArgs: any[]) {
    this.addresses = [];
    if (myArgs.length == 2) {
      this.name = myArgs[0];
      this.birthdate = myArgs[1];
    } else if (myArgs.length == 3) {
      this.name = myArgs[0];
      this.birthdate = myArgs[1];
      this.genre = myArgs[2];
    } else {
      throw new Error('Invalid arguments for Person.');
    }
  }

  addAddress(address: Address) {
    if (this.addresses) this.addresses.push(address);
  }
}
