"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerObserver {
    constructor(customerName) {
        this.customerName = customerName;
    }
    update(order) {
        console.log(`Hi, ${this.customerName}, 
        your order status is now at ${order.getState()}`);
    }
}
exports.default = CustomerObserver;
