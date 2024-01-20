"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderDecorator_1 = __importDefault(require("./orderDecorator"));
class GiftWrappingDecorator extends orderDecorator_1.default {
    constructor(decoratedOrder) {
        super(decoratedOrder);
    }
    getDescription() {
        return `${super.getDescription()}, Gift Wrapping`;
    }
    calculateTotal() {
        return super.calculateTotal() + 2.0;
    }
}
exports.default = GiftWrappingDecorator;
