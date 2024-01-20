import { OrderStatus } from "../constants/enums";
import messages from "../constants/messages";

// interface
import IceCream from "../interface/iceCream";
import OrderObserver from "../observer/orderOberver";

export default class Order {
  private status: string | undefined = OrderStatus.Pending;
  private description: string | undefined;
  private total: number = 0;
  private itemList: IceCream[] = [];
  private observers: OrderObserver[] = [];

  getState(): string {
    return this.status != undefined ? this.status : OrderStatus.Place;
  }
  setState(state: string): void {
    this.status = state;
    this.notifyObservers();
  }

  getDescription(): string {
    return this.description != undefined
      ? this.description
      : messages.message.emptyDescription;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  addItem(item: IceCream): void {
    this.itemList.push(item);
  }

  addObserver(observer: OrderObserver) {
    this.observers.push(observer);
  }

  notifyObservers(): void {
    for (let observer in this.observers) {
      observer.update(this);
    }
  }

  getOrderDetails(): string {
    return `
      Order details: 
      Status : ${this.status}
      Order Items: ${this.itemList.map((item) => item.getDescription())}
      Order Total: LK${this.calculateTotal().toFixed(2)}
    `;
  }

  calculateTotal(): number {
    this.itemList.map((item) => {
      this.total = this.total + item.cost();
    });
    return this.total;
  }
}
