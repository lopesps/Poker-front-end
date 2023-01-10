import Card from "./Card.js";
import Player from "./Player.js";

class Table {
  constructor() {
    this.players = [];
    this.deckDefault = [];
    this.burnedCards = [];
    this.hands = [];
    this.flop = [];
    this.turn;
    this.river;
    this.cardNypes = ["Diamonds", "Clubs", "Hearts", "Spades"];
    this.cardNames = [
      "Ace",
      "Two",
      "Tree",
      "For",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Jack",
      "Queen",
      "King",
    ];
    this.playerCount = 8;
  }

  //Create the deck with 52 unique cards, 13 of each nype
  newDeck() {
    this.cardNypes.forEach((nype) => {
      this.cardNames.forEach((card, key) => {
        this.deckDefault.push(new Card(card, nype, key + 1));
      });
    });
  }

  //Shuffle the created deck
  shuffleDeck() {
    this.newDeck();
    let i = this.deckDefault.length,
      randomIndex;

    while (i != 0) {
      randomIndex = Math.floor(Math.random() * i);
      i--;

      [this.deckDefault[i], this.deckDefault[randomIndex]] = [
        this.deckDefault[randomIndex],
        this.deckDefault[i],
      ];
    }
    return this.deckDefault;
  }

  //Deal the cards to each player
  //Deal the flop, turn and river, burning one card between each instance
  dealCards() {
    let slotCount = this.playerCount * 2;
    this.shuffleDeck();
    this.drawHands(slotCount);

    if (slotCount === this.hands.length) {
      this.drawFlop(slotCount);
      this.drawTurn(slotCount);
      this.drawRiver(slotCount);
      this.burnCards(slotCount);
      this.setFlop();
      this.getPlayers();
      /*       this.getHand(); */
    }
  }

  drawHands(slotCount) {
    for (let i = 0; i < slotCount; i = i + 2) {
      this.hands.push(this.deckDefault[i], this.deckDefault[i + 1] || []);
    }
  }

  drawFlop(slotCount) {
    this.flop.push(
      this.deckDefault[slotCount + 1],
      this.deckDefault[slotCount + 2],
      this.deckDefault[slotCount + 3] || []
    );
  }

  drawTurn(slotCount) {
    this.turn = this.deckDefault[slotCount + 5];
  }

  drawRiver(slotCount) {
    this.river = this.deckDefault[slotCount + 7];
  }

  burnCards(slotCount) {
    this.burnedCards.push(
      this.deckDefault[slotCount],
      this.deckDefault[slotCount + 4],
      this.deckDefault[slotCount + 6] || []
    );
  }

  setFlop() {
    this.flop.push(this.turn, this.river);
  }

  //create players
  getPlayers() {
    for (let index = 0; index < 8; index++) {
      this.players.push(
        new Player(index + 1, "player_" + (index + 1), [
          this.hands[index],
          this.hands[index + 1],
        ])
      );
    }
  }
  //display players

  showPlayers(player) {
    let htmlHand = "";
    player.hand.map((card, key) => {
      htmlHand += `<li class="feature player__name">
                      ${key + 1} - ${card.name} of ${card.nype}
                    </li>`;
    });
    return htmlHand;
  }
  //get the players Hands
}

export default Table;
