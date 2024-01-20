import IceCream from "../interface/iceCream";
import Flavors from "./flavors";
import Toppings from "./toppings";

export default class BasicIcecream implements IceCream {
  private flavor: Flavors[] = []; // string | undefined;
  private toppings: Toppings[] = [];

  getDescription(): string {
    if (this.toppings.length >= 1) {
      return `Ice-cream with ${this.flavor} 
        with toppings ${this.toppings.map((item) => {
          return item;
        })} only for $${this.cost()}`;
    } else {
      return `Ice-cream with ${this.flavor} only for $${this.cost()}`;
    }
  }
  cost(): number {
    return 10;
  }
  getFlavor(): Flavors[] | [] {
    // return this.flavor !== undefined ? this.flavor : "no flavor selected";
    return this.flavor !== undefined ? this.flavor : [];
  }
  getToppings(): Toppings[] {
    return this.toppings !== undefined ? this.toppings : [];
  }
  setFlavor(flavor: Flavors): void {
    // this.flavor = flavor;
    this.flavor.push(flavor);
  }
  addTopping(topping: Toppings): void {
    this.toppings.push(topping);
  }
}
