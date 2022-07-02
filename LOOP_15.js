//15. З клавіатури вводитяться числа поки не буде введено 0. Знайти добуток чисел.

let usersNumber = 1;
let allNumbersProduct = 1;
for (let i = 0; usersNumber !== 0; i++) {
  usersNumber = +prompt("Type in the number");
  if (usersNumber === 0) {
    if (i === 0) {
      allNumbersProduct = 0;
    }
    break;
  }
  allNumbersProduct = allNumbersProduct * usersNumber;
}
document.write(`The product of all numbers is ${allNumbersProduct}`);
