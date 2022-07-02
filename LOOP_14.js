//14. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.

let usersNumber = null;
let allNumbersSummary = null;
for (let i = 0; usersNumber !== 0; i++) {
  usersNumber = +prompt("Type in the number");
  if (usersNumber === 0) {
    break;
  }
  allNumbersSummary = allNumbersSummary + usersNumber;
}
document.write(`The summary of all numbers is ${allNumbersSummary}`);
