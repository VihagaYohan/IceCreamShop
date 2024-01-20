"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum
const enums_1 = require("../constants/enums");
class PreparationState {
    changeState(order) {
        order.setState(enums_1.OrderStatus.Preparation);
    }
}
exports.default = PreparationState;
