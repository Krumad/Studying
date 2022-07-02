//18. З клавіатури поступово вводяться числа. Знайти суму перших N парних чисел.

let evenNumbersAmount = +prompt(`Enter the amount of even numbers to add`);
let usersNumber = 0;
let evensSummary = 0;
let evenNumbersCount = 0;

do {
  usersNumber = +prompt(`Enter the number to add`);
  if (usersNumber % 2 === 0) {
    evenNumbersCount++;
    evensSummary += usersNumber;
  }
} while (evenNumbersCount !== evenNumbersAmount);
document.write(
  `The summary of ${evenNumbersAmount} even numbers = ${evensSummary}`
);
