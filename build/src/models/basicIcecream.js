"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicIcecream {
    constructor() {
        this.toppings = [];
    }
    getDescription() {
        if (this.toppings.length === 0) {
            return `Ice-cream with ${this.flavor} 
        with toppings ${this.toppings.map((item) => {
                return item;
            })} only for $${this.cost()}`;
        }
        else {
            return `Ice-cream with ${this.flavor} only for $${this.cost()}`;
        }
    }
    cost() {
        throw new Error("Method not implemented.");
    }
    getFlavor() {
        return this.flavor !== undefined ? this.flavor : "no flavor selected";
    }
    getToppings() {
        return this.toppings;
    }
    setFlavor(flavor) {
        this.flavor = flavor;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}
exports.default = BasicIcecream;
