// Задача 18.1. Модифікувати попередню задачу з можливістю після пострілу переміщення корабля у випадковим чином вибрану сусідню клітинку (якщо звичайно корабель не було потоплено за першим разом).

const squaresAmount = 10;
let shipPosition = Math.floor(Math.random() * squaresAmount + 1);
let usersShot = +prompt("Ready aim fire!(TYPE IN FROM 1 TO 10", 1);
if (usersShot === shipPosition) {
  alert("You sank a russian warship, admiral!");
} else {
  let shipHitPoints = 2;
  const shotsDamage = 1;
  if (Math.abs(usersShot - shipPosition) === 1) {
    alert("You damaged a russian warship, admiral!");
    shipHitPoints = shipHitPoints - shotsDamage;
  }
  const randomForShipsMove = Math.floor(Math.random() * 2);
  switch (randomForShipsMove) {
    case 0:
      shipPosition = Math.ceil((shipPosition - 1) % squaresAmount);
      break;
    case 1:
      shipPosition = Math.ceil((shipPosition + 1) % squaresAmount);
      break;
    default:
      shipPosition = shipPosition + 0;
  }
  usersShot = +prompt(
    "You have a second chanse, admiral! Ready aim fire!(TYPE IN FROM 1 TO 10",
    1
  );
  if (
    usersShot === shipPosition ||
    (Math.abs(usersShot - shipPosition) === 1 && shipHitPoints < 2)
  ) {
    alert("At last! You sank that piece of shit!");
  } else {
    alert("Oh, what a disaster, admiral!");
  }
}
