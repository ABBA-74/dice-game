export default function displayModal(player1, player2) {
  const modalElement = document.getElementById("staticBackdrop");
  const modalMess = document.getElementById("modal-mess");

  modalMess.textContent = `${
    player1.isTheWinner() ? "Player 1" : "Player 2"
  } is the Winner !!!\n - Score Player 1  : ${
    player1.totalScore
  }  - Score Player 2  : ${player2.totalScore}`;

  const myModal = new bootstrap.Modal(modalElement, {
    keyboard: false,
  });
  myModal.show();
}
