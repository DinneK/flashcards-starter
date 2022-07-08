const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    turn.evaluateCard();
    this.turns++;
    if (!turn.evaluateCard()) {
      this.incorrectGuesses.push(this.returnCurrentCard());
    }
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    let wins = this.turns - this.incorrectGuesses.length;
    let percent = parseFloat(((wins / this.turns) * 100).toFixed(2));
    return percent;
  }
  endRound() {
    console.log(
      `Round over! You answered %${this.calculatePercentCorrect()} correctly.`
    );
    return `Round over! You answered %${this.calculatePercentCorrect()} correctly.`;
  }
}

module.exports = Round;
