import { OrderStatus } from "../constants/enums";
import Command from "../interface/command";
import Order from "../models/order";

export default class PlaceOrderCommand implements Command {
  private order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  execute(): void {
    this.order.setState(OrderStatus.Place);
  }
}
