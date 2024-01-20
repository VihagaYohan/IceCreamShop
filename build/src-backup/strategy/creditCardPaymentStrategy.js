"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// utils
const utils_1 = require("../helpers/utils");
class CreditCardPaymentStrategy {
    payment(amount) {
        (0, utils_1.printConsole)(`You have paid $${amount} using credit card`);
    }
}
exports.default = CreditCardPaymentStrategy;
