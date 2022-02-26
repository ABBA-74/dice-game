import User from "./modules/user.js";

const diceContainer = document.querySelector("#dice");
const rollDiceBtn = document.querySelector("#roll-action__btn");
const holdBtn = document.querySelector("#hold-action__btn");
const roundScorePlayer1 = document.querySelector("#current-score-p1");
const roundScorePlayer2 = document.querySelector("#current-score-p2");
const totalScorePlayer1 = document.querySelector("#score-player-1");
const totalScorePlayer2 = document.querySelector("#score-player-2");
const newGameBtn = document.querySelector("#new-game-btn");

const init = () => {
  // set contents of html at 0
  roundScorePlayer1.textContent = "0";
  totalScorePlayer1.textContent = "0";
  roundScorePlayer2.textContent = "0";
  totalScorePlayer2.textContent = "0";

  // initialization of players
  player1.roundScore = 0;
  player1.totalScore = 0;
  player1.isPlaying = true;
  player2.roundScore = 0;
  player2.totalScore = 0;
  player2.isPlaying = false;

  displayPlayerActive();
};

// Function init after each round
const initRound = () => {
  roundScorePlayer1.textContent = "0";
  roundScorePlayer2.textContent = "0";

  // Toggle players status
  player1.isPlaying = !player1.isPlaying;
  player2.isPlaying = !player2.isPlaying;

  // Set score of each players at 0
  player1.roundScore = 0;
  player2.roundScore = 0;

  displayPlayerActive();
};

// Function used to visualize the player round by changing bg of body
const displayPlayerActive = () => {
  player1.isPlaying &&
    (document.body.classList.add("bg-player-1"),
    document.body.classList.remove("bg-player-2"));
  player2.isPlaying &&
    (document.body.classList.add("bg-player-2"),
    document.body.classList.remove("bg-player-1"));
};

// Function used to determinate the dice value
const roll_dice = () => {
  let diceValue = Math.floor(Math.random() * 6 + 1);
  return diceValue;
};

// Function used to see which one is the winner
const checkEndGame = () => {
  player1.totalScore >= 100 && (console.log("player 1 win"), init());
  player2.totalScore >= 100 && (console.log("player 2 win"), init());
};

// initialization players
let player1 = new User();
let player2 = new User();
init();

// EventListiner actived after each click on the Roll Dice Action
rollDiceBtn.addEventListener("click", () => {
  let diceValue = roll_dice();
  diceContainer.textContent = diceValue.toString();
  if (diceValue !== 1) {
    if (player1.isPlaying) {
      player1.roundScore += diceValue;
      roundScorePlayer1.textContent = player1.roundScore.toString();
      console.log("Player 1 - id", player1);
    }
    if (player2.isPlaying) {
      player2.roundScore += diceValue;
      roundScorePlayer2.textContent = player2.roundScore.toString();
      console.log("Player 2 - id", player2);
    }
  } else {
    initRound();
  }
});

// EventListiner actived after each click on the Hold Action
holdBtn.addEventListener("click", () => {
  player1.isPlaying ? (player1.totalScore += player1.roundScore) : 0;
  player2.isPlaying ? (player2.totalScore += player2.roundScore) : 0;
  totalScorePlayer1.textContent = player1.totalScore.toString();
  totalScorePlayer2.textContent = player2.totalScore.toString();
  checkEndGame();
  initRound();
});

newGameBtn.addEventListener("click", () => {
  init();
});
