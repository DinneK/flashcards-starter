const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");

describe("Game", function () {
  it("should be a function", function () {
    expect(Game).to.be.a("function");
  });

  it("should be an instance of Game", function () {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it("should create new cards", function () {
    const game = new Game();
    game.createCards();
    expect(game.createCards()).to.be.an("array");
  });

  it("should create a new deck", function () {
    const game = new Game();
    game.createDeck();
    expect(game.createDeck()).to.be.an("object");
  });

  it("should make a new game", function () {
    const game = new Game();
    game.makeANewRound();
    expect(game.makeANewRound()).to.be.an("object");
  });
});
