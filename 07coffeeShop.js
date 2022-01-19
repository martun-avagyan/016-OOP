"use strict";

class CoffeeShop {
  constructor(name) {
    this.name = name;
    this.menu = [];
    this.orders = [];
  }

  addItems(item) {
    this.menu.push(...item);
  }

  addOrder(item) {
    let isExist = false;
    this.menu.forEach((e) => {
      if (item === e.name) {
        this.orders.push(e);
        isExist = true;
      }
    });

    if (!isExist) {
      console.log(`${item} is currently unavailable!`);
    }
  }

  listOrders() {
    console.log("List Orders = ", this.orders);
  }

  dueAmount() {
    const totalPrice = this.orders.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    console.log("Total Price = ", totalPrice);
  }

  fulfillOrder() {
    if (this.orders.length === 0) {
      console.log("All orders have been fulfilled!");
    } else {
      let readyItem = this.orders.shift();
      console.log(`${readyItem.name} is ready!`);
    }
  }

  cheapestItem() {
    let current = 100000;
    this.orders.forEach(function (val) {
      if (current > val.price) {
        current = val.price;
      }
    });

    console.log("Cheapest item is " + current + " amd");
  }

  drinksOnly() {
    const drinks = this.orders.filter(function (val) {
      if (val.type === "drink") {
        console.log(val);
      }
    });
    return drinks;
  }

  foodOnly() {
    const foods = this.orders.filter(function (val) {
      if (val.type === "food") {
        console.log(val);
      }
    });
    return foods;
  }
}

class Item {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
}

const pepsi = new Item("pepsi", "drink", 650);
const milk = new Item("milk", "drink", 450);
const kebab = new Item("kebab", "food", 1100);
const orax = new Item("orax", "drink", 2000);
const xash = new Item("xash", "food", 3000);
const whiskey = new Item("bacardi", "drink", 1200);

const coffee = new CoffeeShop("Pele");

coffee.addItems([pepsi, milk, kebab, orax, xash]);

coffee.addOrder("moxito");
coffee.addOrder("pepsi");
coffee.addOrder("milk");
coffee.addOrder("xash");
coffee.addOrder("bacardi");

coffee.listOrders();

coffee.fulfillOrder();
coffee.listOrders();

coffee.dueAmount();
coffee.cheapestItem();
coffee.drinksOnly();
coffee.foodOnly();
