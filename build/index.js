"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderBuilder_1 = __importDefault(require("./src/builder/orderBuilder"));
const customerObserver_1 = __importDefault(require("./src/observer/customerObserver"));
const basicIcecream_1 = __importDefault(require("./src/models/basicIcecream"));
const flavorHandler_1 = __importDefault(require("./src/cor/flavorHandler"));
const toppingHandler_1 = __importDefault(require("./src/cor/toppingHandler"));
const flavors_1 = __importDefault(require("./src/data/flavors"));
const toppings_1 = __importDefault(require("./src/data/toppings"));
const placeOrderCommand_1 = __importDefault(require("./src/commands/placeOrderCommand"));
const creditCardPaymentStrategy_1 = __importDefault(require("./src/strategy/creditCardPaymentStrategy"));
const paymentStrategy_1 = __importDefault(require("./src/strategy/paymentStrategy"));
const item = new basicIcecream_1.default();
item.setFlavor(flavors_1.default[0]);
item.addTopping(toppings_1.default[0]);
const flavorHandler = new flavorHandler_1.default();
const toppingHandler = new toppingHandler_1.default();
flavorHandler.setNext(toppingHandler);
flavorHandler.handleRequest(item);
const order = new orderBuilder_1.default()
    .addItem(item)
    .addObserver(new customerObserver_1.default("John Doe"))
    .build();
// place order
const placeOrderCommand = new placeOrderCommand_1.default(order);
placeOrderCommand.execute();
// get order details
const orderDetails = order.getOrderDetails();
console.log(orderDetails);
// payment
const cardPayment = new creditCardPaymentStrategy_1.default({ amount: order.calculateTotal() });
const paymentStrategy = new paymentStrategy_1.default(cardPayment);
paymentStrategy.charge();
console.log(order);
