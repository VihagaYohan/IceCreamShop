"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../helpers/utils");
class PreparationState {
    processOrder(order) {
        (0, utils_1.printConsole)(`
        Order is being prepared`);
        order.setStatus("In preparation");
    }
}
exports.default = PreparationState;
