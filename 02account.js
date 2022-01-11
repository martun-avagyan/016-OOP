"use strict";

class Account {
  constructor(name, balance) {
    this.id = Account.incrementId();
    this._name = name;
    this._balance = balance;
  }

  // Getters

  get name() {
    return this._name;
  }
  get balance() {
    return this._balance;
  }

  // Setters

  set name(str) {
    _name = str;
  }
  set balance(num) {
    if (typeof num === "number") {
      this._balance = num;
    } else {
      console.log("Please Input A Number");
    }
  }

  // Class Methods

  credit(amount) {
    this._balance += amount;
    return this._balance + amount;
  }
  debit(amount) {
    if (this._balance - amount < 0) {
      console.log("Amount exceeded balance");
    } else {
      this._balance -= amount;
      return this._balance;
    }
  }
  transferTo(anotherAccount, amount) {
    if (this._balance - amount < 0) {
      console.log("Amount exceeded balance");
    } else {
      this._balance -= amount;
      anotherAccount._balance += amount;
      return this._balance;
    }
  }
  static identifyAccounts(firstAccount, secondAccount) {
    if (firstAccount === secondAccount) {
      return true;
    } else {
      return false;
    }
  }

  static incrementId() {
    if (!this.id) this.id = 1;
    else this.id++;
    return this.id;
  }
  toString() {
    return `${this._name}'s account balance is ${this._balance}`;
  }
}

const savingsAccount = new Account("Savings Account", 120000);
const currentAccount = new Account("Current Account", 45000);
const cardAccount = new Account("Card Account", 2000);

console.log(savingsAccount);
console.log(currentAccount);
console.log(cardAccount);

console.log(savingsAccount); // Account { id: 0, _name: 'Saving account',_balance: 2000 }
console.log(cardAccount); // Account { id: 1, _name: 'Card account', _balance:1000 }
console.log(savingsAccount.balance); // 2000
console.log(savingsAccount.credit(400)); // 2400
console.log(savingsAccount.balance); // 2400
console.log(savingsAccount.debit(9000)); //6600
console.log(savingsAccount.transferTo(cardAccount, 1000)); // 1400
console.log(savingsAccount.balance); // 1400
console.log(savingsAccount.balance); // 2000
let anotherAccount = savingsAccount;
console.log(Account.identifyAccounts(savingsAccount, anotherAccount)); // true
console.log(Account.identifyAccounts(savingsAccount, cardAccount)); // false
console.log(savingsAccount.toString()); // Saving account's account balance is $1400.
