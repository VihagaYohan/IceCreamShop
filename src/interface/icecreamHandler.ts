import IceCream from "./iceCream";

export default interface IceCreamHandler {
  handleRequest(iceCream: IceCream): void;
}
