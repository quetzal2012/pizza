topping = 0;
cost = 0;
function Order(size, topping) {
  this.size = size;
  this.topping = topping;
}

Order.prototype.cost = function () {
  var cost = 7;
  for (var i = 0; i < this.topping.length; i++) {
    if (this.topping === "sausage" || "pepperoni" || "mushrooms" || "greenpep" || "canbacon") {
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
  var size = $("select#size").val();
  var cost = Order (size, topping);
  $('input[name="locationthemes"]:checked').each(function() {
     console.log(this.topping);
  });
  var pizzaOrder = new Order(size, topping);
  var pizzaCost = pizzaOrder.cost();


  $("#pizzaCost").text(pizzaCost);
  event.preventDefault();


});
});
