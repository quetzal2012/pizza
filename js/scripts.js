topping = 0;
cost = 0;

function Order(size, topping) {
  this.size = size;
  this.topping = topping;
}

Order.prototype.cost = function () {
  var cost = 7;
  for (var i = 0; i < this.topping.length; i++) {
    if (this.topping[i] === "sausage" || "pepperoni" || "mushrooms" || "greenpep" || "canbacon") {
   cost += 1;
  } if (this.size === "small"){
   cost += 1;
 }  if (this.size === "medium"){
   cost += 3;
 }  if (this.size === "large"){
   cost += 4;
 }
 }
   return cost;
};



//front



$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
  var size = $("select#size").val();
  cost = Order(size, topping);

  $('input[name="toppings"]:checked').each(function() {
  topping.push($(this).val());
  });
  event.preventDefault();
  var pizzaOrder = new Order(size, topping);
  var totalCost = pizzaOrder.cost();


  $("#pizzaCost").text(totalCost);


});
});
