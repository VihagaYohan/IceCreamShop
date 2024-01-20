"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// utils
const utils_1 = require("../helpers/utils");
class PlaceOrderCommand {
    constructor(order) {
        this.order = order;
    }
    execute() {
        (0, utils_1.printConsole)(`
        Placing order...`);
        this.order.setStatus("Placed");
    }
}
exports.default = PlaceOrderCommand;
