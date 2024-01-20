"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum
const enums_1 = require("../constants/enums");
class PlaceState {
    changeState(order) {
        order.setState(enums_1.OrderStatus.Place);
    }
}
exports.default = PlaceState;
