"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = __importDefault(require("../constants/messages"));
class ToppingHandler {
    setNext(next) {
        this.next = next;
    }
    handleRequest(iceCream) {
        if (iceCream.getToppings() === null) {
            console.log(messages_1.default.message.emptyToppings); // select at least 1 topping
        }
        else if (this.next != undefined) {
            this.next.handleRequest(iceCream);
        }
    }
}
exports.default = ToppingHandler;
