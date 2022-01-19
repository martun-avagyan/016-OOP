"use strict";

// const myConsole = new Console('Regular');
// const fancyConsole = new Console('Fancy');
// myConsole.log([0, 1, 2, 3]) // "Regular: [0,1,2,3]"
// myConsole.log({ a:1, b:2 }) // "Fancy: {a:1, b:2}"
// myConsole.log("ok : ", 1, 2, 3) ➞ "ok : 1, 2, 3"
// myConsole.clearHistory() // true
// myConsole.history() // ""

class Console {
  constructor(name) {
    this._name = name;
    this._history = [];
  }

  log(head, ...tail) {
    let res = "";

    if (typeof head === "string") {
      const stringifiedTail = JSON.stringify(...tail);
      res = `${head} ${stringifiedTail}`;
    } else {
      const stringifiedArgs = JSON.stringify(head, ...tail);
      res = `${this.name}: ${stringifiedArgs}`;
    }

    console.log(res);
    this._history.push(res);
  }

  history(start = 0, end = 0) {
    if (start || end) {
      if (end) {
        console.log(this._history.slice(start, end));
      } else {
        console.log(this._history.slice(start));
      }
    } else {
      console.log(this._history);
    }
  }

  get name() {
    return this._name;
  }
}

const myConsole = new Console("Regular");
const fancyConsole = new Console("Fancy");
myConsole.log([0, 1, 2, 3]); // "Regular: [0,1,2,3]"
fancyConsole.log({ a: 1, b: 2 }); // "Fancy: {a:1, b:2}"
myConsole.log("ok : ", 1, 2, 3); // "ok : 1, 2, 3"

fancyConsole.history();
myConsole.history(1);
