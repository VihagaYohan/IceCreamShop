"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Place"] = "Order Placed";
    OrderStatus["Preparation"] = "In preparation";
    OrderStatus["Delivery"] = "Out for delivery";
    OrderStatus["Delivered"] = "Delivered";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["Card"] = "Card payment";
    PaymentMethod["CreditCard"] = "Credit card payment";
    PaymentMethod["BankTransfer"] = "Bank transfer";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
