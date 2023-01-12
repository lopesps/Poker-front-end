<<<<<<< HEAD
import Table from "./components/Table.js";
import Player from "./components/Player.js";

=======
import Table from "../components/Table.js";
/* import Player from "../components/Player.js";
 */
>>>>>>> aa00c77 (front organizado)
/* const players = new Player(8); */
const table = new Table();

table.dealCards();

const newDeck = table.deckDefault.map((card, index) => {
  let tableArticle = document.createElement("article");
  tableArticle.classList.add("card");
  tableArticle.setAttribute("id", "deck_" + index);

  tableArticle.innerHTML = `
      <li class="feature card__name">${index + 1} - ${card.name} of ${
    card.nype
  }</li>
  `;
  return tableArticle;
});

const flop = table.flop.map((card, index) => {
  let flopArticle = document.createElement("article");
  flopArticle.classList.add("card");
  flopArticle.setAttribute("id", "flop_" + index);

  flopArticle.innerHTML = `
      <li class="feature card__name">${index + 1} - ${card.name} of ${
    card.nype
  }</li>
  `;

  return flopArticle;
});

const playersHands = table.players.map((player, key) => {
  let playerArticle = document.createElement("article");
  playerArticle.classList.add("player");
  playerArticle.setAttribute("id", "player_" + key);

  playerArticle.innerHTML = `
      <div class="playerContainer">
        <h2>${player.name}</h2>
        ${table.showPlayers(player)}
      </div>
  `;

  return playerArticle;
});

const main = document.querySelector(".maincontent");
const aside = document.querySelector(".asidecontent");
const nav = document.querySelector(".navcontent");

newDeck.forEach((card) => {
  main.append(card);
});

flop.forEach((card) => {
  aside.append(card);
});

playersHands.forEach((player) => {
  nav.append(player);
});

//map through and display the deck, player cards and the flop+turn+river

console.log("Shufflued Deck:", table.deckDefault);
// console.log("Dealing Cards!", table.dealCards());
console.log("Hands:", table.hands);
console.log("Flop:", table.flop);
console.log("Burned Cards:", table.burnedCards);
// console.log("Turn:", table.turn);
// console.log("River:", table.river);

console.log(table.players);
