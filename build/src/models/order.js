"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../constants/enums");
const messages_1 = __importDefault(require("../constants/messages"));
class Order {
    constructor() {
        this.status = enums_1.OrderStatus.Pending;
        this.total = 0;
        this.itemList = [];
        this.observers = [];
    }
    getState() {
        return this.status != undefined ? this.status : enums_1.OrderStatus.Place;
    }
    setState(state) {
        this.status = state;
        this.notifyObservers();
    }
    getDescription() {
        return this.description != undefined
            ? this.description
            : messages_1.default.message.emptyDescription;
    }
    setDescription(description) {
        this.description = description;
    }
    addItem(item) {
        this.itemList.push(item);
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyObservers() {
        for (let observer in this.observers) {
            observer.update(this);
        }
    }
    getOrderDetails() {
        return `
      Order details: 
      Status : ${this.status}
      Order Items: ${this.itemList.map((item) => item.getDescription())}
      Order Total: LK${this.calculateTotal().toFixed(2)}
    `;
    }
    calculateTotal() {
        this.itemList.map((item) => {
            this.total = this.total + item.cost();
        });
        return this.total;
    }
}
exports.default = Order;
