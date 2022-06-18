//ROZG
// Задача 16. Комп’ютер загадує число від 1 до 5. Дати можливість користувачу за 2 спроби вгадати загадане комп’ютером число.

const randomizer = Math.floor(Math.random() * 5) + 1;
console.log(randomizer);
let usersGuessTry =
  +prompt("Try to guess the number guessed by AI:\n1. \n2. \n3. \n4. \n5.") ||
  alert("Wrong data");
if (usersGuessTry === randomizer) {
  alert("David Blaine, is it you? :)");
} else {
  usersGuessTry =
    +prompt("One more time:\n1. \n2. \n3. \n4. \n5.") || alert("Wrong data");
  if (usersGuessTry === randomizer) {
    alert("Finally!");
  } else {
    alert("Cya,buddy...");
  }
}
