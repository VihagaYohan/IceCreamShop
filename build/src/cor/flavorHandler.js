"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = __importDefault(require("../constants/messages"));
class FlavorHandler {
    setNext(next) {
        this.next = next;
    }
    handleRequest(iceCream) {
        var _a;
        if (iceCream.getFlavor() === null) {
            console.log(messages_1.default.message.emptyFlavor); // select a flavor
        }
        else if (this.next !== undefined) {
            (_a = this.next) === null || _a === void 0 ? void 0 : _a.handleRequest(iceCream);
        }
    }
}
exports.default = FlavorHandler;
