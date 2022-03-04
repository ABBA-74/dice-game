// Function init after each round
export default function initRound(player1, player2) {
  const roundScorePlayer1 = document.querySelector("#current-score-p1");
  const roundScorePlayer2 = document.querySelector("#current-score-p2");
  roundScorePlayer1.textContent = "0";
  roundScorePlayer2.textContent = "0";
  // Toggle player status
  player1.isPlaying = !player1.isPlaying;
  player2.isPlaying = !player2.isPlaying;
  // Set Round Score at 0 for each player
  player1.roundScore = 0;
  player2.roundScore = 0;
}
