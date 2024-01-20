export interface Payment {
  amount: number;
}

export interface PaymentMethod {
  charge(): Payment;
}
