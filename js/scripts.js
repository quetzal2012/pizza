function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Order.prototype.cost = function () {
  var cost = 7;
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] === "sausage" || "pepperoni" || "mushrooms" || "greenpep" || "canbacon") {
   cost += 1;
  }

  if (this.size === "Small"){
   cost += 1;
 }  if (this.size === "Medium"){
   cost += 3;
}  if (this.size === "Large"){
   cost += 4;
 }
 }
   return cost;
};



//front



$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    var size = $("select#size").val();
    var toppings = [];
  $('input[name="toppings"]:checked').each(function() {
  toppings.push($(this).val());
  });

  var pizzaOrder = new Order(size, toppings);
  var totalCost = pizzaOrder.cost();


  $("#pizzaCost").text("$" +totalCost);


});
});
