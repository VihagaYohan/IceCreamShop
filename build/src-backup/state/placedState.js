"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../helpers/utils");
class PlacedState {
    processOrder(order) {
        (0, utils_1.printConsole)(`
            Order placed
        `);
        order.setStatus("Placed");
    }
}
