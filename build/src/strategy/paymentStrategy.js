"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentStrategy {
    constructor(strategy) {
        this.strategy = strategy;
    }
    charge() {
        return this.strategy.charge();
    }
}
exports.default = PaymentStrategy;
