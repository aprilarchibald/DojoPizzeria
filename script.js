function pizzaOven (crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    this.sauceType = sauceType;
    pizza.cheeses = cheeses;
    this.toppings =toppings;
    return pizza;
}
let p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

let p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

let p3 = pizzaOven("thin crust", "marinara", "extra cheese", ["ham", "pineapple"])
console.log(p3)

let p4 = pizzaOven("thin crust", "regular", "pepper jack", ["pepperoni", "sausage","mushroom"])
console.log(p4)


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
randomNumber (0, 78)
function randomPizza()
//Maybe I can come back and play with this. I could not quite amke it work.