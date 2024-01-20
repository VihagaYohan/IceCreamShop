import Order from "../models/order";

export default interface OrderObserver {
  update(order: Order): void;
}
