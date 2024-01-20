import OrderState from "./orderState";

// models
import Order from "../models/order";

// enum
import { OrderStatus } from "../constants/enums";

export default class PreparationState implements OrderState {
  changeState(order: Order): void {
    order.setState(OrderStatus.Preparation);
  }
}
