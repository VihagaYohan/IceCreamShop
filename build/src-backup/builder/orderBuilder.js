"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderBuilder {
    constructor() {
        this.order = new OrderBuilder();
    }
    addItem(item) {
        this.order.addItem(item);
        return this;
    }
    addObserver(observer) {
        this.order.addObserver(observer);
        return this;
    }
    build() {
        return this.order;
    }
}
exports.default = OrderBuilder;
