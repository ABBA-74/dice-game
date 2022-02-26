export default function displayModal(modalElement, name) {
  const modalMess = document.getElementById("modal-mess");

  modalMess.textContent = `${name} is the Winner !!!`;
  const myModal = new bootstrap.Modal(modalElement, {
    keyboard: false,
  });
  // myModal.toggle();
  console.log(typeof myModal);
  console.log(myModal);
  myModal.show();
}
