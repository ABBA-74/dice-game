import User from "./modules/user.js";
import displayModal from "./modules/modal.js";
import displayActivePlayer from "./modules/displayActivePlayer.js";
import rollDice from "./modules/rollDice.js";
import init from "./modules/init.js";
import initRound from "./modules/initRound.js";

// const diceContainer = document.querySelector("#dice");
const rollDiceBtn = document.querySelector("#roll-action");
const holdBtn = document.querySelector("#hold-action");
const roundScorePlayer1 = document.querySelector("#current-score-p1");
const roundScorePlayer2 = document.querySelector("#current-score-p2");
const totalScorePlayer1 = document.querySelector("#score-player-1");
const totalScorePlayer2 = document.querySelector("#score-player-2");
const newGameBtn = document.querySelector("#new-game-btn");

let isDiceRolling = false;

// Function used to see which one is the winner
const isEndGame = () => {
  if (player1.isTheWinner() || player2.isTheWinner()) {
    displayModal(player1, player2);
    init(player1, player2);
    displayActivePlayer(player1, player2);
    return true;
  }
  return false;
};

// initialization players
let player1 = new User("Player 1");
let player2 = new User("Player 2");
init(player1, player2);
displayActivePlayer(player1, player2, true);

// EventListiner actived after each click on the Roll Dice Action
rollDiceBtn.addEventListener("click", () => {
  if (!isDiceRolling) {
    isDiceRolling = true;
    //// Timemout of dice animation added - 550ms
    let diceValue = rollDice();
    setTimeout(() => {
      if (diceValue !== 1) {
        if (player1.isPlaying) {
          player1.roundScore += diceValue;
          roundScorePlayer1.textContent = `${player1.roundScore}`;
        }
        if (player2.isPlaying) {
          player2.roundScore += diceValue;
          roundScorePlayer2.textContent = `${player2.roundScore}`;
        }
      } else {
        initRound(player1, player2);
        displayActivePlayer(player1, player2);
      }
      isDiceRolling = false;
    }, 650);
  }
});

// EventListiner actived after each click on the Hold Action
holdBtn.addEventListener(
  "click",
  () => {
    player1.isPlaying ? (player1.totalScore += player1.roundScore) : 0;
    player2.isPlaying ? (player2.totalScore += player2.roundScore) : 0;
    totalScorePlayer1.textContent = `${player1.totalScore}`;
    totalScorePlayer2.textContent = `${player2.totalScore}`;
    !isEndGame() &&
      (initRound(player1, player2), displayActivePlayer(player1, player2));
  },
  true
);

newGameBtn.addEventListener("click", () => {
  init(player1, player2);
  displayActivePlayer(player1, player2, true);
});
