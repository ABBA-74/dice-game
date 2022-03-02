// Function used to visualize the player round by changing
// styles of label player and round score
export default function displayActivePlayer(
  player1,
  player2,
  isBeginningGame = false
) {
  const wrapperPlayer1 = document.getElementById("wrapper-player-1");
  const wrapperPlayer2 = document.getElementById("wrapper-player-2");
  const labelPlayer1 = document.querySelector("#label-player-1");
  const labelPlayer2 = document.querySelector("#label-player-2");

  // Added delay 300ms according to dice rolling
  const tmpTimeOut = isBeginningGame ? 100 : 300;
  setTimeout(() => {
    if (player1.isPlaying) {
      wrapperPlayer1.classList.add("player-active");
      wrapperPlayer2.classList.remove("player-active");
      labelPlayer1.classList.add("active");
      labelPlayer2.classList.remove("active");
    }

    if (player2.isPlaying) {
      wrapperPlayer1.classList.remove("player-active");
      wrapperPlayer2.classList.add("player-active");
      labelPlayer1.classList.remove("active");
      labelPlayer2.classList.add("active");
    }
  }, tmpTimeOut);
}
