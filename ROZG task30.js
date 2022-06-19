// Задача 18.2. Модифікувати попередню задачу таким чином, що кораблем керує користувач, а комп’ютер стріляє.

const squaresAmount = +prompt(`Enter size of battlefield you wish`) || 10;
console.log("field", squaresAmount);
let shipPosition =
  +prompt(
    `Admiral, place your ship in area from 1 to ${squaresAmount} squares!`
  ) || 1;
console.log("pos1", shipPosition);
let AIs_shot = Math.floor(Math.random() * squaresAmount + 1);
console.log("AIfs1", AIs_shot);
if (AIs_shot === shipPosition) {
  alert(
    "Admiral, it has been an honor for me to serve under your comm... *chokes"
  );
} else {
  let shipHitPoints = 2;
  const shotsDamage = 1;
  if (Math.abs(AIs_shot - shipPosition) === 1) {
    alert(`GOD DAMN,we've been hit, admiral!`);
    shipHitPoints = shipHitPoints - shotsDamage;
  }
  const shipsMove = +prompt(
    `Admiral, we must move! Move: \n1. Forward  \n2. Back `
  );
  if (shipsMove === 1) {
    if (shipPosition === squaresAmount) {
      shipPosition = (squaresAmount % squaresAmount) + 1;
    } else {
      shipPosition = (shipPosition + squaresAmount + 1) % squaresAmount;
    }
  } else if (shipsMove === 2) {
    if (shipPosition === 1) {
      shipPosition = squaresAmount;
    } else {
      shipPosition = (shipPosition + squaresAmount - 1) % squaresAmount;
    }
  } else {
    alert("We did not move, admiral!");
  }
  console.log("shipsmove", shipsMove, "reestabl", shipPosition);
  AIs_shot = Math.floor(Math.random() * squaresAmount + 1);
  console.log("AI2", AIs_shot);
  if (
    AIs_shot === shipPosition ||
    (Math.abs(AIs_shot - shipPosition) === 1 && shipHitPoints < 2)
  ) {
    alert("Bloody hell, they still got us, admiral!");
  } else {
    alert("Mother of God, we have broken through, admiral!");
  }
}
