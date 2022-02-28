export default function init(player1, player2) {
  const roundScorePlayer1 = document.querySelector("#current-score-p1");
  const roundScorePlayer2 = document.querySelector("#current-score-p2");
  const totalScorePlayer1 = document.querySelector("#score-player-1");
  const totalScorePlayer2 = document.querySelector("#score-player-2");

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
}
