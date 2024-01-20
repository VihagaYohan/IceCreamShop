// models
import Order from "../models/order";

// interface
import IceCream from "../interface/iceCream";

// observer
import OrderObserver from "../observer/orderOberver";

export default class OrderBuilder {
  private order: Order = new Order();

  addItem(item: IceCream): OrderBuilder {
    this.order.addItem(item);
    return this;
  }

  addObserver(observer: OrderObserver): OrderBuilder {
    this.order.addObserver(observer);
    return this;
  }

  build(): Order {
    return this.order;
  }
}
