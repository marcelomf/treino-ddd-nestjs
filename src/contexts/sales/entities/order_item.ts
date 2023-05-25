export class OrderItem {
  protected id?: string;
  protected name: string;
  protected price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    if (this.name.length < 3) {
      throw new Error('Invalid length name.');
    }
  }

  getPrice() {
    return this.price;
  }
}
