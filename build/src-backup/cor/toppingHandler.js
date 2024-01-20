"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// utils
const utils_1 = require("../helpers/utils");
class ToppingHandler {
    setNext(next) {
        this.next = next;
    }
    handleRequest(iceCream) {
        if (iceCream.getToppings().length === 0) {
            (0, utils_1.printConsole)(`
            Please at least select a one topping`);
        }
        else if (this.next != null) {
            this.next.handleRequest(iceCream);
        }
    }
}
exports.default = ToppingHandler;
