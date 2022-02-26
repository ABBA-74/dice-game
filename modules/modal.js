export default function displayModal(player) {
  const modalElement = document.getElementById("staticBackdrop");
  const modalMess = document.getElementById("modal-mess");

  modalMess.textContent = `${player.name} is the Winner !!!`;
  const myModal = new bootstrap.Modal(modalElement, {
    keyboard: false,
  });
  myModal.show();
}
