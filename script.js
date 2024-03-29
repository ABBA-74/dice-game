import User from "./modules/user.js";
import displayModal from "./modules/modal.js";
import displayActivePlayer from "./modules/displayActivePlayer.js";
import rollDice from "./modules/rollDice.js";
import init from "./modules/init.js";
import initRound from "./modules/initRound.js";

const rollDiceBtn = document.querySelector("#roll-action");
const holdBtn = document.querySelector("#hold-action");
const roundScorePlayer1 = document.querySelector("#current-score-p1");
const roundScorePlayer2 = document.querySelector("#current-score-p2");
const totalScorePlayer1 = document.querySelector("#score-player-1");
const totalScorePlayer2 = document.querySelector("#score-player-2");
const newGameBtn = document.querySelector("#new-game-action");

let isDiceRolling = false;

// initialization of players
const player1 = new User("Player 1");
const player2 = new User("Player 2");
init(player1, player2);
displayActivePlayer(player1, player2, true);

// Handling actions after player click on Roll Dice Button
const handleRollDice = () => {
  if (!isDiceRolling) {
    isDiceRolling = true;
    let diceValue = rollDice();
    // Added delay according to dice animation + effect box shadow added - min = .6s+ 350ms
    setTimeout(() => {
      if (diceValue !== 1) {
        player1.isPlaying &&
          ((player1.roundScore += diceValue),
          (roundScorePlayer1.textContent = `${player1.roundScore}`));
        player2.isPlaying &&
          ((player2.roundScore += diceValue),
          (roundScorePlayer2.textContent = `${player2.roundScore}`));
      } else {
        initRound(player1, player2);
        displayActivePlayer(player1, player2);
      }
      isDiceRolling = false;
    }, 1150);
  }
};

// Handling actions after player click on Hold Button
const handleHoldScore = () => {
  player1.isPlaying && (player1.totalScore += player1.roundScore);
  player2.isPlaying && (player2.totalScore += player2.roundScore);
  totalScorePlayer1.textContent = `${player1.totalScore}`;
  totalScorePlayer2.textContent = `${player2.totalScore}`;
  !isEndGame() &&
    (initRound(player1, player2), displayActivePlayer(player1, player2));
};

// Handling actions after player click on New Game Button
const reset = () => {
  init(player1, player2);
  displayActivePlayer(player1, player2, true);
};

// Function used to check end game / display modal with winner / init scores
const isEndGame = () => {
  if (player1.isTheWinner() || player2.isTheWinner()) {
    displayModal(player1, player2);
    init(player1, player2);
    displayActivePlayer(player1, player2);
    return true;
  }
  return false;
};

// EventListener after each click on the Roll Dice Action
rollDiceBtn.addEventListener("click", handleRollDice);
// EventListener after each click on the Hold Action
holdBtn.addEventListener("click", handleHoldScore);
// EventListener after each click on Reset Action
newGameBtn.addEventListener("click", reset);
