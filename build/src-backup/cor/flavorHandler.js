"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// utils
const utils_1 = require("../helpers/utils");
class FlavorHandler {
    setNext(next) {
        this.next = next;
    }
    handleRequest(iceCream) {
        if (iceCream.getFlavor() === null) {
            (0, utils_1.printConsole)("Please select a flavor");
        }
        else if (this.next != null) {
            this.next.handleRequest(iceCream);
        }
    }
}
exports.default = FlavorHandler;
