import OrderDecotrator from "./orderDecorator";

import Order from "../models/order";

class SpecialPackagingDecorator extends OrderDecotrator {
  constructor(decoratedOrder: Order) {
    super(decoratedOrder);
  }

  getDescription(): string {
    const description = `${super.getDescription()}, special packaging`;
    return description;
  }

  calculateTotal(): number {
    return super.calculateTotal() + 5.0;
  }
}
