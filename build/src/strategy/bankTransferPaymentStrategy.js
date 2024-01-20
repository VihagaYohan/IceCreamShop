"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankTransferPayment {
    constructor(payment) {
        this.payment = payment;
    }
    charge() {
        return this.payment;
    }
}
exports.default = BankTransferPayment;
