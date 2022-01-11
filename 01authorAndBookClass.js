"use strict";
class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender.toLowerCase();
  }
  toString() {
    if (this._gender === "female") {
      return "MS. " + this.name;
    } else if (this._gender === "male") {
      return "MR. " + this.name;
    }
  }
  set name(str) {
    if (typeof str === "string") {
      this._name = str;
    } else {
      throw "Input Not A String";
    }
  }
  get name() {
    return this._name;
  }
  get gender() {
    return this._gender;
  }
}

const firstAuthor = new Author("J. K. Rowling", "jkr@gmail.com", "FEMALE");

console.log(firstAuthor.gender);
console.log(firstAuthor.toString());

class Book {
  constructor(title, price, quantity, author) {
    this._title = title;
    this._price = price;
    this._quantity = quantity;
    this._author = author;
  }
  set title(str) {
    this._title = str.toUpperCase() + "🧙‍♂️";
  }
  get title() {
    return this._title;
  }

  set price(price) {
    if (typeof price === "number") {
      this._price = price;
    } else {
      console.log("Input is not a number.");
    }
  }
  get price() {
    return this._price;
  }
  set quantity(num) {
    if (typeof num === "number") {
      this._quantity = num;
    } else {
      console.log("Input is not a number.");
    }
  }
  get quantity() {
    return this._quantity;
  }
  getProfit() {
    return this._quantity * this._price;
  }
}

const harryPotter = new Book(
  "Harry Potter And The Prisoner Of Azkhaban",
  249,
  10000,
  firstAuthor
);

console.log(harryPotter);

harryPotter._author.name = 12;
