// create your coffee object array here

const coffeeOrders = [
  {
    type: "latte",
    customer: "Anna",
    milk: true,
  },
  {
    type: "cortado",
    customer: "Beth",
    milk: true,
  },
  {
    type: "espresso",
    customer: "Charlotte",
    milk: false,
  },
];

// creat your print order function here individually

var coffeeOrders1 = coffeeOrders[0];
console.log(coffeeOrders1.type + " is for " + coffeeOrders1.customer + " which has" + (coffeeOrders1.milk ? " milk" : " no milk"));

var coffeeOrders2 = coffeeOrders[1];
console.log(coffeeOrders2.type + " is for " + coffeeOrders2.customer + " which has" + (coffeeOrders2.milk ? " milk" : " no milk"));

var coffeeOrders3 = coffeeOrders[2];
console.log(coffeeOrders3.type + " is for " + coffeeOrders3.customer + " which has" + (coffeeOrders3.milk ? " milk" : " no milk"));


// creat your print order function here all together

for (var i = 0; i < coffeeOrders.length; i++) {
  console.log(coffeeOrders[i].type + " is for " + coffeeOrders[i].customer + " which has" + (coffeeOrders[i].milk ? " milk" : " no milk"));
}

// creat your print order function here all together for loop

function printOrder(order) {
    console.log(
        "Coffe Type:" +
            order.type +
        ", Customer:" +
            order.customer +
        ", Has Milk:" +
            order.milk
    );
}

// One type of loop

coffeeOrders.forEach(printOrder);

// Another type of loop

for (const order in coffeeOrders) {
    printOrder(coffeeOrders[order]);
}