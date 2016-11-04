function Order (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Order.prototype.cost = function () {
  var cost = 7;
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings === "sausage" || "pepperoni" || "mushrooms" || "greenpep" || "canbacon") {
     cost +=1;
   }if (this.size === "small"){
   cost += 1;
 }
  return cost;
}


//front

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
  $("#pizzaCost").text(cost);
  event.preventDefault();


});
});
};
