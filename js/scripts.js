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
    if (this.size) === "small"
   cost += 1;
  }
    if (this.size) === "medium"
    cost += 3;
  }
    if (this.size) === "large"
    cost += 4;
  }
  return cost
}


//front

$(document).ready(function() {

  $("form#orderForm").submit(function(event) {
     var size = $("select#size").val();
     var toppings = []
    $("input[type=checkbox]").each(function () {
      toppings.push($(this).val());
});
