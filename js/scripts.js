function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Order.prototype.cost = function () {
  var cost = 7;
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings === "sausage" || "pepperoni" || "mushrooms" || "greenpep" || "canbacon") {
     cost +=1;
  }else if (this.size === "small"){
   cost += 1;
 } else if (this.size === "medium"){
   cost += 3;
 } else if (this.size === "large"){
   cost += 4;
 }
 }
   return cost;

};



//front


$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
  $("input[name="toppings"]:checked").each(function () {
  toppings.push($(this).val());
  console.log(var cost = Order (size, toppings));
  var size = $("select#size").val();
  });
  var pizzaOrder = new Order(size, toppings);
  var pizzaCost = pizzaOrder.cost();

  event.preventDefault();

  $("#pizzaCost").text(pizzaCost);


});
});
