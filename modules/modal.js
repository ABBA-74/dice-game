export default function displayModal(player1, player2) {
  const modalElement = document.getElementById("staticBackdrop");
  const modalTitle = document.getElementById("modal-title");
  const modalScoreP1 = document.getElementById("modal-score-p1");
  const modalScoreP2 = document.getElementById("modal-score-p2");
  const groupLedP1 = document.querySelectorAll(".modal .block-leds-p1 .led");
  const groupLedP2 = document.querySelectorAll(".modal .block-leds-p2 .led");
  const myModal = new bootstrap.Modal(modalElement, {
    keyboard: false,
  });

  // Init remove all active led
  groupLedP1.forEach((led) => led.classList.remove("active"));
  groupLedP2.forEach((led) => led.classList.remove("active"));

  // Return nb led should be active
  const nbActiveLedP1 = Math.trunc(player1.totalScore / 5);
  const nbActiveLedP2 = Math.trunc(player2.totalScore / 5);

  // Set active class for group led
  groupLedP1.forEach((led, index) => {
    index < nbActiveLedP1 && led.classList.add("active");
  });

  groupLedP2.forEach((led, index) => {
    index < nbActiveLedP2 && led.classList.add("active");
  });

  // Set messages inside modal
  // modalTitle.textContent = `${
  //   player1.isTheWinner() ? "PLAYER 1" : "PLAYER 2"
  // } WIN !!!`;
  modalTitle.textContent = `${
    player1.isTheWinner() ? "PLAYER 1" : "PLAYER 2"
  } WINS !`;
  modalScoreP1.textContent = `${player1.totalScore}`;
  modalScoreP2.textContent = `${player2.totalScore}`;
  myModal.show();
}
