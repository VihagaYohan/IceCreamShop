"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// utils
const utils_1 = require("../helpers/utils");
class CustomerOrderObserver {
    constructor(customerName) {
        this.customerName = customerName;
    }
    update(order) {
        (0, utils_1.printConsole)(`
            Hi, ${this.customerName}, your order is now at ${order.getStatus()} status 
        `);
    }
}
exports.default = CustomerOrderObserver;
