class Hamburger {
  constructor(size, filling) {
    this.size = size;
    this.filling = filling;
    this.components = [];
  }

  static SMALL_HAMBURGER = { price: 50, calories: 20 };
  static BIG_HAMBURGER = { price: 100, calories: 40 };
  static CHEESE = { price: 10, calories: 20 };
  static SALAT = { price: 20, calories: 5 };
  static POTATO = { price: 15, calories: 10 };
  static TOMATO = { price: 10, calories: 7 };
  static ONION = { price: 12, calories: 4 };
  static SALT = { price: 5, calories: 2 };
  static PEPPER = { price: 15, calories: 0 };
  static MAYONES = { price: 20, calories: 5 };

  addMenu(component) {
    this.components.push(component);
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.filling.price;
    for (let component of this.components) {
      totalPrice += component.price;
    }
    return totalPrice;
  }

  calculateCalories() {
    let totalCalories = this.size.calories + this.filling.calories;
    for (let component of this.components) {
      totalCalories += component.calories;
    }
    return totalCalories;
  }
}

var hamburger = new Hamburger(Hamburger.SMALL_HAMBURGER, Hamburger.CHEESE);
hamburger.addMenu(Hamburger.MAYONES);
hamburger.addMenu(Hamburger.ONION);
hamburger.addMenu(Hamburger.PEPPER);
console.log("Первый заказ:")
console.log("Калории: " + hamburger.calculateCalories());
console.log("Цена: " + hamburger.calculatePrice() + " UAH");

var hamburger2 = new Hamburger(Hamburger.BIG_HAMBURGER, Hamburger.SALAT, Hamburger.CHEESE);
hamburger2.addMenu(Hamburger.MAYONES);
hamburger2.addMenu(Hamburger.TOMATO);
hamburger2.addMenu(Hamburger.SALT);
hamburger2.addMenu(Hamburger.POTATO);

console.log("Второй заказ:")
console.log("Калории: " + hamburger2.calculateCalories());
console.log("Цена: " + hamburger2.calculatePrice() + " UAH");
