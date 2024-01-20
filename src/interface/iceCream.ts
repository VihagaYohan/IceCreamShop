import Flavors from "../models/flavors";
import Toppings from "../models/toppings";

export default interface IceCream {
  getDescription(): string;
  cost(): number;
  getFlavor(): Flavors[] | null;
  getToppings(): Toppings[] | null;
  setFlavor(flavor: Flavors): void;
  addTopping(topping: Toppings): void;
}
