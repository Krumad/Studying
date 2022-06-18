//ROZG
// Задача 18. Морський бій. Ворожий корабель, може знаходитись в одному із квадратів (кількість квадратів вводиться з клавіатури), які розташовані лінійно (один за одним) на річці.

// Позиція корабля визначається комп’ютером випадковим чином.
// Гра відбувається за правилами:
// 1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), то корабель потоплено;
// 2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, де знаходиться корабель, то корабель пошкоджено (про це повідомляємо користувача).
// За два постріли спробувати потопити корабель.

const squaresAmount = 10;
let shipPosition = Math.floor(Math.random() * squaresAmount + 1);
console.log(shipPosition);
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
  usersShot = +prompt(
    "You have a second chanse, admiral! Ready aim fire!(TYPE IN FROM 1 TO 10",
    1
  );
  if (
    usersShot === shipPosition ||
    (Math.abs(usersShot - shipPosition) === 1 &&
      shipHitPoints < 2)
  ) {
    alert("At last! You sank that piece of shit!");
  } else {
    alert("Oh, what a disaster, admiral!");
  }
}
