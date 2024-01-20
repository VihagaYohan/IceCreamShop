import IceCream from "../interface/iceCream";
import IceCreamHandler from "../interface/icecreamHandler";
import messages from "../constants/messages";

export default class ToppingHandler implements IceCreamHandler {
  private next: IceCreamHandler | undefined;

  setNext(next: IceCreamHandler): void {
    this.next = next;
  }

  handleRequest(iceCream: IceCream): void {
    if (iceCream.getToppings() === null) {
      console.log(messages.message.emptyToppings); // select at least 1 topping
    } else if (this.next != undefined) {
      this.next.handleRequest(iceCream);
    }
  }
}
