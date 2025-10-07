var car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  getPrice: function () {
    return this.make + " " + this.model + "cost $20,000";
  },
};

var price = car.getPrice(); // 20000
console.log(price);