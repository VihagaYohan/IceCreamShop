import IceCream from "../interface/iceCream";
import IceCreamHandler from "../interface/icecreamHandler";
import messages from "../constants/messages";

export default class FlavorHandler implements IceCreamHandler {
  private next: IceCreamHandler | undefined;

  setNext(next: IceCreamHandler): void {
    this.next = next;
  }

  handleRequest(iceCream: IceCream): void {
    if (iceCream.getFlavor() === null) {
      console.log(messages.message.emptyFlavor); // select a flavor
    } else if (this.next !== undefined) {
      this.next?.handleRequest(iceCream);
    }
  }
}
