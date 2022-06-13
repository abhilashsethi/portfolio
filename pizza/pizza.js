// order a pizza -3sec

// order processing - 2sec

// Pizza crust heating - 5sec

// cut few veges - 3sec

// prepare for final pizza -6sec

// received at your order - 5sec

setTimeout(orderPizza, 3000);

function orderPizza() {
  console.log("Ordering pizza");
  setTimeout(orderprocesing, 2000);
  setTimeout(pizaCrustHeating, 5000);  
}

function orderprocesing() {
  console.log("Order processing");
}


function pizaCrustHeating() {
  console.log("Pizza crust heating");
  setTimeout(cutVegies, 3000);
  setTimeout(prepareFinalPizza, 6000);
}

function cutVegies() {
  console.log("Cut few vegies");
}
function prepareFinalPizza() {
  console.log("Prepare for final pizza");
setTimeout(receiveOrder, 5000);
}

function receiveOrder() {
  console.log("Received at your order");
}

let heading = document.querySelector("p")
heading.innerHTML = "<h1>HI</h1>"

let ele=document.getElementsByName("form1")

