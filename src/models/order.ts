import { OrderStatus } from "../constants/enums";

// interface
import IceCream from "../interface/iceCream";
import OrderObserver from "../observer/orderOberver";

export default class Order {
  private status: string | undefined;
  private description: string | undefined;
  private total: number = 0;

  getState(): string {
    return this.status != undefined ? this.status : OrderStatus.Place;
  }
  setState(state: string): void {
    this.status = state;
  }

  getDescription(): string {
    return this.description != undefined
      ? this.description
      : "description yet to be added";
  }

  setDescription(description: string): void {
    this.description = description;
  }

  addItem(item: IceCream): void {
    return;
  }

  addObserver(observer: OrderObserver) {
    return;
  }

  calculateTotal(): number {
    return this.total;
  }
}
