import Order from "../models/order";
import OrderObserver from "./orderOberver";

export default class CustomerObserver implements OrderObserver {
  private customerName: string;

  constructor(customerName: string) {
    this.customerName = customerName;
  }
  update(order: Order): void {
    console.log(`Hi, ${this.customerName}, 
        your order status is now at ${order.getState()}`);
  }
}
