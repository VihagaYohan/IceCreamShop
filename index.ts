import OrderBuilder from "./src/builder/orderBuilder";
import CustomerOrderObserver from "./src/observer/customerObserver";
import BasicIceCream from "./src/models/basicIcecream";

const order = new OrderBuilder()
  .addItem(new BasicIceCream())
  .addObserver(new CustomerOrderObserver("John Doe"));

console.log(order.build());
