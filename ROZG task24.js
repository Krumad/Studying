//ROZG
// Задача 16.1. Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього (від лівого або правого краю) не більше ніж на 10.

const randomIntervalStart = Math.floor(Math.random() * 100 + 1);
console.log(randomIntervalStart);
const randomInterval = 100 - randomIntervalStart;
const randomIntervalEnd =
  Math.floor(Math.random() * randomInterval + 1) + randomIntervalStart;
console.log(randomIntervalEnd);
const userGuessNumber = +prompt(
  `Enter number from 1 to 100 to guess AI's interval`
);
alert(`AI's interval = ${randomIntervalStart} - ${randomIntervalEnd}`);
const userGuessedInterval =
  userGuessNumber >= randomIntervalStart - 10 &&
  randomIntervalEnd + 10 >= userGuessNumber;
if (userGuessedInterval) {
  alert(`You win!`);
} else {
  alert("You lose!");
}
