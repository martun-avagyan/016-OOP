"use strict";

class Shiritori {
  constructor() {
    this.words = [];
    this.gameOver = false;
  }

  // Methods

  play(word) {
    let wordsArr = this.words;
    let lastWord = wordsArr[wordsArr.length - 1];
    if (this.words.length === 0) {
      this.words.push(word);
      return this.words;
    } else if (word[0] === lastWord[lastWord.length - 1]) {
      wordsArr.push(word);
      return this.words;
    } else {
      return "Game Over Dude, You Are Terrible";
    }
  }
  restart() {
    this.words = [];
    this.gameOver = false;
    return "Game Restarted, You Dumb Losers";
  }
}

const firstRound = new Shiritori();
firstRound.play("underground");
console.log(firstRound.words);
firstRound.play("democracy");
console.log(firstRound.words);
console.log(firstRound.play("inheritance"));
console.log(firstRound.words);
console.log(firstRound.restart());
