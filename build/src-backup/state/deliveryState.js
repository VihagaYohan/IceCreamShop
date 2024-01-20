"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../helpers/utils");
class DeliveryState {
    processOrder(order) {
        (0, utils_1.printConsole)(`
        Order is out for delivery.`);
        order.setStatus("Out for delivery");
    }
}
exports.default = DeliveryState;
