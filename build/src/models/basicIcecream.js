"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicIcecream {
    constructor() {
        this.flavor = []; // string | undefined;
        this.toppings = [];
    }
    getDescription() {
        if (this.toppings.length >= 1) {
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
        return 10;
    }
    getFlavor() {
        // return this.flavor !== undefined ? this.flavor : "no flavor selected";
        return this.flavor !== undefined ? this.flavor : [];
    }
    getToppings() {
        return this.toppings !== undefined ? this.toppings : [];
    }
    setFlavor(flavor) {
        // this.flavor = flavor;
        this.flavor.push(flavor);
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}
exports.default = BasicIcecream;
