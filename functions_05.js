/*Задача 5. Створити функцію, яка для 3 заданих чисел знаходить кількість парних.(без масиву)*/

const getEvensAmount = (a, b, c) => {
  let evensCount = 0;
  if (a % 2 === 0) {
    evensCount++;
  }
  if (b % 2 === 0) {
    evensCount++;
  }
  if (c % 2 === 0) {
    evensCount++;
  }
  return evensCount;
};

let firstNumber = +prompt(`Enter first number`);
let secondNumber = +prompt(`Enter second number`);
let thirdNumber = +prompt(`Enter third number`);

alert(
  `The amount of even numbers = ${getEvensAmount(
    firstNumber,
    secondNumber,
    thirdNumber
  )}`
);
