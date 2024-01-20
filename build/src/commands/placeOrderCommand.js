"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../constants/enums");
class PlaceOrderCommand {
    constructor(order) {
        this.order = order;
    }
    execute() {
        this.order.setState(enums_1.OrderStatus.Place);
    }
}
exports.default = PlaceOrderCommand;
