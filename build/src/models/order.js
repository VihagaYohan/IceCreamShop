"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../constants/enums");
class Order {
    constructor() {
        this.total = 0;
    }
    getState() {
        return this.status != undefined ? this.status : enums_1.OrderStatus.Place;
    }
    setState(state) {
        this.status = state;
    }
    getDescription() {
        return this.description != undefined
            ? this.description
            : "description yet to be added";
    }
    setDescription(description) {
        this.description = description;
    }
    addItem(item) {
        return;
    }
    addObserver(observer) {
        return;
    }
    calculateTotal() {
        return this.total;
    }
}
exports.default = Order;
