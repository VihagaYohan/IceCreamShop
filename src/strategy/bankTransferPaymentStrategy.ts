import { Payment, PaymentMethod } from "../interface/paymentStrategy";

export default class BankTransferPayment implements PaymentMethod {
  payment: Payment;

  constructor(payment: Payment) {
    this.payment = payment;
  }

  charge(): Payment {
    return this.payment;
  }
}
