export default interface IceCream {
  getDescription(): string;
  cost(): number;
  getFlavor(): string | null;
  getToppings(): string[];
  setFlavor(flavor: string): void;
  addTopping(topping: string): any;
}
