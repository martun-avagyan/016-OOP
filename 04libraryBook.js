class Book {
  constructor(name, author) {
    this._name = name;
    this._author = author;
  }

  get name() {
    return this._name;
  }

  get author() {
    return this._author;
  }

  toString() {
    return `${this.name} by ${this.author}`;
  }

  isTheSameBook(book) {
    return (
      book instanceof Book &&
      book.name === this.name &&
      book.author === this.author
    );
  }
}

class LibraryBookBase extends Book {
  constructor(name, author) {
    super(name, author);
    this._id = LibraryBookBase.count++;
  }

  static count = 0;

  get id() {
    return this._id;
  }

  toString() {
    return `${this.id}. ${this.name} by ${this.author}`;
  }
}

class LibraryBook extends Book {
  constructor(name, author, quantity = 1) {
    super(name, author);
    this._id = LibraryBook.idCount++;
    this._quantity = quantity;
  }

  get id() {
    return this._id;
  }

  static idCount = 0;

  get quantity() {
    return this._quantity;
  }

  increaseQuantityBy(amount = 1) {
    if (typeof amount === "number" && !Number.isNaN(amount))
      this._quantity += amount;
  }

  decreaseQuantityBy(amount = 1) {
    if (
      typeof amount === "number" &&
      !Number.isNaN(amount) &&
      amount <= this._quantity
    )
      this._quantity -= amount;
  }

  toString() {
    return `${this.id}. ${this.name} by ${this.author}`;
  }
}

class ReaderBook extends Book {
  constructor(name, author, expirationDate) {
    super(name, author);
    this._id = ReaderBook.idCount++;
    this._expirationDate = expirationDate;
    this._isReturned = false;
  }

  static idCount = 0;

  get id() {
    return this._id;
  }

  get isReturned() {
    return this._isReturned;
  }

  set isReturned(boolean) {
    if (typeof boolean === "boolean") {
      this._isReturned = boolean;
    } else {
      this._isReturned = true;
    }
  }

  get expirationDate() {
    return this._expirationDate;
  }

  set expirationDate(newExparationDate) {
    if (typeof newExparationDate === "string") {
      this._expirationDate = newExparationDate;

      return "Exparation date successfully updated!!!";
    } else {
      return "Please input valid date";
    }
  }

  toString() {
    return `${this.id}. ${this.name} by ${this.author}`;
  }
}

class Library {
  constructor(name, books) {
    this._name = name;
    (this._books = books), (this._readers = []);
  }

  get name() {
    return this._name;
  }

  get books() {
    return this._books;
  }

  get readers() {
    return this._readers;
  }

  doHaveBook(requestedBook) {
    if (requestedBook instanceof Book) {
      return this.books.some((el) => {
        return (
          el.name === requestedBook.name && el.author === requestedBook.author
        );
      });
    }

    return "Invalid book!!";
  }

  addBook(newBook) {
    if (newBook instanceof LibraryBook) {
      this._books.push(newBook);

      return "Your book successfully added!";
    }

    return "Invalid Book!!";
  }

  addBooks(newBooks) {
    const isValidBooks = newBooks.every((el) => el instanceof LibraryBook);
    if (isValidBooks) {
      this._books = [...this._books, ...newBooks];

      return "Your books successfully added!";
    }

    return "Invalid Book!!";
  }

  checkReaderID(id) {
    if (Reader.allReaders.includes(id)) return true;
    else return false;
  }
  lendBook(book, readerID) {
    if (
      Reader.allReaders.includes(readerID) &&
      Library.prototype.doHaveBook(book)
    ) {
      return ReaderBook(book);
    }
  }
}

const defaultBook = new Book("You Don't know JS", "Kyle Simpson");

const book1 = new LibraryBook("You Don't know JS", "Kyle Simpson", 5);
const book2 = new LibraryBook("Design Patterns", "Alexander Shvarts", 2);
const book3 = new LibraryBook(
  "Ժողովրդական հեքիաթներ",
  "Հովհաննես Թումանյան",
  15
);

const book4 = new LibraryBook("Aa", "ASP", 6);
const book5 = new LibraryBook("Va", "Հովհաննես Թումանյան", 1);

const myBooks = [book1, book2, book3];

const myLibrary = new Library("My Library", myBooks);

class Reader {
  constructor(firstName, lastName, books) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.books = books;
    this.readersID = Reader.incrementID();
  }
  static incrementID() {
    if (!this.readersID) {
      this.readersID = 1;
      this.allReaders = [];
      this.allReaders.push(this.readersID);
    } else {
      this.readersID++;
      this.allReaders.push(this.readersID);
      return this.readersID;
    }
  }
}

console.log(Reader.readersID);

const firstReader = new Reader("Johnny", "Depp", "Some Book");

const secondReader = new Reader("Anthony", "Hopkins", "Some Book");

const thirdReader = new Reader("Lenny", "Kravitz", "Other Book");
// console.log(myLibrary.doHaveBook(defaultBook))

// myLibrary.addBooks([book4, book5])

// console.log(myLibrary.books)

// console.log(book1.isTheSameBook(book2))
// console.log(book1.isTheSameBook(book3))

console.log(firstReader);
console.log(secondReader);
console.log(thirdReader);
console.log(Reader.allReaders);

const testLibrary = new Library("Khnko Aper", [
  "Random Book",
  "Another Random Books",
]);
console.log(testLibrary.checkReaderID(2));
console.log(testLibrary.checkReaderID(5));
