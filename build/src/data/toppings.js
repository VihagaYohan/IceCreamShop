"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toppings_1 = __importDefault(require("../models/toppings"));
const ToppingsList = [
    new toppings_1.default("toppings 1", 3),
    new toppings_1.default("toppings 2", 5),
    new toppings_1.default("toppings 3", 8),
];
exports.default = ToppingsList;
