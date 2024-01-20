import Order from "../models/order";
import OrderDecotrator from "./orderDecorator";

export default class GiftWrappingDecorator extends OrderDecotrator {
  constructor(decoratedOrder: Order) {
    super(decoratedOrder);
  }

  getDescription(): string {
    const description = `${super.getDescription()}, gift wrapping`;
    return description;
  }

  calculateTotal(): number {
    return super.calculateTotal() + 2.0;
  }
}
