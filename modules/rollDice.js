// Function used to determinate the dice value + light effects
export default function rollDice() {
  const diceContainer = document.querySelector(".dice");
  const diceValue = Math.floor(Math.random() * 6 + 1);
  const visibleFaceDice = document.querySelector(`.dice__face--${diceValue}`);
  const showClass = `show-${diceValue}`;

  for (let i = 1; i < 7; i++)
    diceContainer.classList.contains(`show-${i}`) &&
      diceContainer.classList.remove(`show-${i}`);

  diceContainer.classList.add(showClass);
  document.querySelectorAll(".dice__face").forEach((el) => {
    el.style.border = "2px solid var(--color-light-grey)";
    el.style.boxShadow = "none";
  });

  setTimeout(() => {
    if (diceValue === 1) {
      visibleFaceDice.style.border = "2px solid red";
      visibleFaceDice.style.boxShadow =
        "0 0 150px rgb(255, 0, 0), 0 0 100px rgb(255, 0, 0), 0 0 50px rgba(255, 0, 0, 0.8)";
    } else {
      visibleFaceDice.style.border = "2px solid green";
      visibleFaceDice.style.boxShadow =
        "0 0 150px rgb(0, 255, 0), 0 0 100px rgb(0, 255, 0),  0 0 50px rgb(255, 0, 0)";
    }
  }, 850);

  return diceValue;
}
