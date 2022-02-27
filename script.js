import User from "./modules/user.js";
import displayModal from "./modules/modal.js";
import displayActivePlayer from "./modules/displayActivePlayer.js";
import rollDice from "./modules/rollDice.js";

// const diceContainer = document.querySelector("#dice");
const rollDiceBtn = document.querySelector("#roll-action");
const holdBtn = document.querySelector("#hold-action");
const roundScorePlayer1 = document.querySelector("#current-score-p1");
const roundScorePlayer2 = document.querySelector("#current-score-p2");
const totalScorePlayer1 = document.querySelector("#score-player-1");
const totalScorePlayer2 = document.querySelector("#score-player-2");
const newGameBtn = document.querySelector("#new-game-btn");

let isDiceRolling = false;

const init = () => {
  // Set score contents at 0 inside html
  roundScorePlayer1.textContent = "0";
  totalScorePlayer1.textContent = "0";
  roundScorePlayer2.textContent = "0";
  totalScorePlayer2.textContent = "0";

  // initialization of players
  player1.resetScore();
  player2.resetScore();
  player1.isPlaying = true;
  player2.isPlaying = false;

  document.querySelectorAll(".dice__face").forEach((el) => {
    el.style.border = "3px solid var(--color-light-grey)";
    el.style.boxShadow = "none";
  });

  displayActivePlayer(player1, player2, true);
};

// Function init after each round
const initRound = () => {
  roundScorePlayer1.textContent = "0";
  roundScorePlayer2.textContent = "0";
  // Toggle players status
  player1.isPlaying = !player1.isPlaying;
  player2.isPlaying = !player2.isPlaying;
  // Set round score at 0 for each players
  player1.roundScore = 0;
  player2.roundScore = 0;
  displayActivePlayer(player1, player2);
};

// Function used to see which one is the winner
const isEndGame = () => {
  let res = player2.isTheWinner() || player1.isTheWinner();
  player1.isTheWinner() && (displayModal(player1), init());
  player2.isTheWinner() && (displayModal(player2), init());
  return res;
};

// initialization players
let player1 = new User("Player 1");
let player2 = new User("Player 2");
init();

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
        initRound();
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
    !isEndGame() && initRound();
  },
  true
);

newGameBtn.addEventListener("click", () => {
  init();
});
