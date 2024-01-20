"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models
const order_1 = __importDefault(require("../models/order"));
class OrderBuilder {
    constructor() {
        this.order = new order_1.default();
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
