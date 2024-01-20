import { Payment, PaymentMethod } from "../interface/paymentStrategy";

export default class PaymentStrategy {
  strategy: PaymentMethod;

  constructor(strategy: PaymentMethod) {
    this.strategy = strategy;
  }

  charge(): Payment {
    return this.strategy.charge();
  }
}
