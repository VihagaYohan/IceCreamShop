"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models
const order_1 = __importDefault(require("../models/order"));
class OrderDecotrator extends order_1.default {
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
exports.default = OrderDecotrator;
