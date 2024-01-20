"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flavors_1 = __importDefault(require("../models/flavors"));
const FlavorsList = [
    new flavors_1.default("Chocolate", 10),
    new flavors_1.default("Vanilla", 6),
    new flavors_1.default("Strawberry", 8),
];
exports.default = FlavorsList;
