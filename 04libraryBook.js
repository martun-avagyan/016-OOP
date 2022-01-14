"use strict";
class Book {
  constructor({ title, author }) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }

  toString() {
    return `hello`;
  }
  isTheSameBook(book) {
    if (this._title === book._title && this._author === book.author) {
      return true;
    } else return false;
  }
}

const instance = {
  title: "Harry Potter & The Order Of Phoenix",
  author: "J. K. Rowling",
};

class LibraryBookBase extends Book {
  constructor({ title, author }) {
    super({ title, author });
    this._bookId = LibraryBookBase.index++;
  }
  static index = 0;

  get bookId() {
    return this._bookId;
  }
  set bookId(value) {
    if (typeof value === "number") {
      this._bookId = value;
    } else {
      throw new Error("Not A Number");
    }
  }
  toString() {
    return `${this._title} is a great book`;
  }
}
const secondBook = new LibraryBookBase(instance);

class LibraryBook extends Book {
  constructor({ title, author }, quantity) {
    super({ title, author });
    this.bookId = LibraryBookBase.index++;
    this.quantity = quantity;
  }

  increaseQuantityBy(amount) {
    return (this.quantity += amount);
  }
  decreaseQuantityBy(amount) {
    return (this.quantity -= amount);
  }
}
const thirdBook = new LibraryBook(instance);
const fourthBook = new LibraryBook(instance);

console.log(thirdBook);

class ReaderBook extends Book {
  constructor({ title, author }) {
    super({ title, author });
    this.bookId = LibraryBookBase.index++;
    this.expirationDate = expirationDate;
    this.isReturned = isReturned;
  }
}

class Reader {
  constructor({ firstName, lastName, readerId, books }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.readerId = Reader.index++;
    this.books = books;
  }
  static index = 0;
  toString() {
    return "Random String";
  }
}

const reader = {
  firstName: "Martun",
  lastName: "Avagyan",
  readerId: Reader.index++,
  books: [],
};
