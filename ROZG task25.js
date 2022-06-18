//ROZG
// Задача 17. Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді. Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.

const firstUsersNumber = +prompt("Try to guess number 1-10");
const secondUsersNumber = +prompt("Try to guess number 1-10");
const randomizer = Math.floor(Math.random() * 10 + 1);
alert("AI chose - " + randomizer);
console.log(
  firstUsersNumber,
  typeof firstUsersNumber,
  secondUsersNumber,
  typeof secondUsersNumber,
  randomizer,
  typeof randomizer
);
if (
  (randomizer === secondUsersNumber && randomizer === firstUsersNumber) ||
  firstUsersNumber === secondUsersNumber
) {
  alert("Draw!");
} else {
  const firstUserWins =
    Math.abs(randomizer - firstUsersNumber) <
    Math.abs(randomizer - secondUsersNumber);
  if (firstUserWins) {
    alert("First user wins!");
  } else {
    alert("Second user wins!");
  }
}
