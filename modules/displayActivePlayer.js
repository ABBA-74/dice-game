// Function used to visualize the player round by changing bg of body
// + changing styles of label and round score
export default function displayActivePlayer(
  player1,
  player2,
  isBeginningGame = false
) {
  const labelPlayer1 = document.querySelector("#label-player-1");
  const labelPlayer2 = document.querySelector("#label-player-2");
  const roundScorePlayer1 = document.querySelector("#current-score-p1");
  const roundScorePlayer2 = document.querySelector("#current-score-p2");

  // Timemout of dice animation added (min 550ms) - Only on initRound
  const tmpTimeOut = isBeginningGame ? 0 : 690;
  setTimeout(() => {
    if (player1.isPlaying) {
      document.body.classList.add("bg-player-1");
      document.body.classList.remove("bg-player-2");
      labelPlayer1.style.color = "#f0ece7";
      roundScorePlayer1.style.color = "#f0ece7";
      labelPlayer2.style.color = "#7e8d85";
      roundScorePlayer2.style.color = "#7e8d85";
    }

    if (player2.isPlaying) {
      document.body.classList.add("bg-player-2");
      document.body.classList.remove("bg-player-1");
      labelPlayer1.style.color = "#7e8d85";
      roundScorePlayer1.style.color = "#7e8d85";
      labelPlayer2.style.color = "#f0ece7";
      roundScorePlayer2.style.color = "#f0ece7";
    }
  }, tmpTimeOut);
}
