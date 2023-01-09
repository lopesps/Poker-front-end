import Table from "./Table.js";
import Player from "./Player.js";

const players = new Player(8);
const table = new Table(8);

const content = `
  <p>
  </p>
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("table");
newArticle.setAttribute("id", "poker");
newArticle.innerHTML = content;

main.append(newArticle);

console.log("Shufflued Deck:", table.shuffleDeck());
console.log("Dealing Cards!", table.dealCards());
console.log("Flop:", table.flop);
console.log("Turn:", table.turn);
console.log("River:", table.river);
console.log("Burned Cards:", table.burnedCards);
console.log("Players:", players.numPlayers);
console.log("Final Flop:", table.setFlop());
