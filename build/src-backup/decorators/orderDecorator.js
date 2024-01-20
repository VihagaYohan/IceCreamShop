"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderDecorator extends Order {
    constructor(decoratedOrder) {
        super();
        this.decoratedOrder = decoratedOrder;
    }
    getDescription() {
        return this.decoratedOrder.getDescription();
    }
    calculateTotal() {
        return this.decoratedOrder.calculateTotal();
    }
}
exports.default = OrderDecorator;
