"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum
const enums_1 = require("../constants/enums");
class CompletedState {
    changeState(order) {
        order.setState(enums_1.OrderStatus.Delivered);
    }
}
exports.default = CompletedState;
