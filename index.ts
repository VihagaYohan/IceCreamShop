import OrderBuilder from "./src/builder/orderBuilder";
import CustomerOrderObserver from "./src/observer/customerObserver";
import BasicIceCream from "./src/models/basicIcecream";
import FlavorHandler from "./src/cor/flavorHandler";
import ToppingHandler from "./src/cor/toppingHandler";
import FlavorsList from "./src/data/flavors";
import ToppingsList from "./src/data/toppings";
import PlaceOrderCommand from "./src/commands/placeOrderCommand";
import CreditCardPayment from "./src/strategy/creditCardPaymentStrategy";
import PaymentStrategy from "./src/strategy/paymentStrategy";

const item = new BasicIceCream();
item.setFlavor(FlavorsList[0]);
item.addTopping(ToppingsList[0]);
const flavorHandler = new FlavorHandler();
const toppingHandler = new ToppingHandler();

flavorHandler.setNext(toppingHandler);
flavorHandler.handleRequest(item);

const order = new OrderBuilder()
  .addItem(item)
  .addObserver(new CustomerOrderObserver("John Doe"))
  .build();

// place order
const placeOrderCommand = new PlaceOrderCommand(order);
placeOrderCommand.execute();

// get order details
const orderDetails = order.getOrderDetails();
console.log(orderDetails);

// payment
const cardPayment = new CreditCardPayment({ amount: order.calculateTotal() });
const paymentStrategy = new PaymentStrategy(cardPayment);
paymentStrategy.charge();

console.log(order);
