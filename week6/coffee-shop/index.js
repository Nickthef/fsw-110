function orderButton() {
  const espresso = document.getElementById("espresso-price").value;
  const latte = document.getElementById("latte-price").value;
  const iceCoffee = document.getElementById("iced-coffee-price").value;
  const bagels = document.getElementById("bagels-price").value;
  const donuts = document.getElementById("donuts-price").value;
  const croissant = document.getElementById("croissant-price").value;
  const breakfastSandwich = document.getElementById("breakfast-sandwich-price").value;

  const espressoPrice = document.querySelector(".espresso-price").textContent;
  const lattePrice = document.querySelector(".latte-price").textContent;
  const icedCoffeePrice = document.querySelector(".iced-coffee-price").textContent;
  const bagelsPrice = document.querySelector(".bagels-price").textContent;
  const donutsPrice = document.querySelector(".donuts-price").textContent;
  const croissantPrice = document.querySelector(".croissant-price").textContent;
  const breakfastSandwichPrice = document.querySelector(".breakfast-sandwich-price").textContent;

  var espressoPriceTotal = espressoPrice * espresso;
  var lattePriceTotal = lattePrice * latte;
  var icedCoffeePriceTotal = icedCoffeePrice * iceCoffee;
  var bagelsPriceTotal = bagelsPrice * bagels;
  var donutsPriceTotal = donutsPrice * donuts;
  var croissantPriceTotal = croissantPrice * croissant;
  var breakfastSandwichPriceTotal = breakfastSandwichPrice * breakfastSandwich;

  var totalPrice = espressoPriceTotal + lattePriceTotal + icedCoffeePriceTotal + bagelsPriceTotal + donutsPriceTotal + croissantPriceTotal + breakfastSandwichPriceTotal;

  document.getElementById("final-price").value = totalPrice;
}
