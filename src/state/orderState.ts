import Order from "../models/order";

export default interface OrderState {
  changeState(order: Order): void;
}
