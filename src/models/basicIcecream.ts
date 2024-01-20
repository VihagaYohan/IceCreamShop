import IceCream from "../interface/iceCream";

export default class BasicIcecream implements IceCream {
  private flavor: string | undefined;
  private toppings: string[] = [];

  getDescription(): string {
    if (this.toppings.length === 0) {
      return `Ice-cream with ${this.flavor} 
        with toppings ${this.toppings.map((item) => {
          return item;
        })} only for $${this.cost()}`;
    } else {
      return `Ice-cream with ${this.flavor} only for $${this.cost()}`;
    }
  }
  cost(): number {
    throw new Error("Method not implemented.");
  }
  getFlavor(): string | null {
    return this.flavor !== undefined ? this.flavor : "no flavor selected";
  }
  getToppings(): string[] {
    return this.toppings;
  }
  setFlavor(flavor: string): void {
    this.flavor = flavor;
  }
  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}
