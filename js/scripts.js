//Function (size, toppings)
//Object.Prototype - set price
//If statements and i++ to increment through the toppings and size

//business logic

function Order (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Order.prototype.cost = function () {
  var cost = 7;
  for (var i = 0; i < this.toppings; i++) {
    if (this.toppings) === "sausage" || "pepperoni" || "mushrooms" || "greenpep" || "canbacon") {
    cost +=1;
    }
    
  }
}
