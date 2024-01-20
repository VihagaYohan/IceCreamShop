// models
import Order from "../models/order";

export default abstract class OrderDecotrator extends Order {
  protected decoratedOrder: Order;

  constructor(decoratedOrder: Order) {
    super();
    this.decoratedOrder = decoratedOrder;
  }

  getDescription(): string {
    return this.decoratedOrder.getDescription();
  }

  calculateTotal(): number {
    return this.decoratedOrder.calculateTotal();
  }
}
