"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderBuilder_1 = __importDefault(require("./src/builder/orderBuilder"));
const customerObserver_1 = __importDefault(require("./src/observer/customerObserver"));
const basicIcecream_1 = __importDefault(require("./src/models/basicIcecream"));
const order = new orderBuilder_1.default()
    .addItem(new basicIcecream_1.default())
    .addObserver(new customerObserver_1.default("John Doe"));
console.log(order.build());
