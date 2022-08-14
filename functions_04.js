/*Задача 4. Створити окремі функції, які для 4 чисел знаходять:
1)суму;
2)добуток;
3)середнє арифметичне;
4)мінімальне значення. 
*/

const getSum = (a, b, c, d) => {
  return a + b + c + d;
};

const getProduct = (a, b, c, d) => {
  return a * b * c * d;
};

const getArithmeticMean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

const getMinNumber = (a, b, c, d) => {
  let minNumber = a;
  if (b < minNumber) minNumber = b;
  if (c < minNumber) minNumber = c;
  if (d < minNumber) minNumber = d;
  return minNumber;
};

let firstNumber = +prompt(`Enter first number`);
let secondNumber = +prompt(`Enter second number`);
let thirdNumber = +prompt(`Enter third number`);
let fourthNumber = +prompt(`Enter fourth number`);

alert(
  `The summ = ${getSum(firstNumber, secondNumber, thirdNumber, fourthNumber)},
  The product = ${getProduct(
    firstNumber,
    secondNumber,
    thirdNumber,
    fourthNumber
  )},
  The arithmetic mean = ${getArithmeticMean(
    firstNumber,
    secondNumber,
    thirdNumber,
    fourthNumber
  )},
  The minimal number = ${getMinNumber(
    firstNumber,
    secondNumber,
    thirdNumber,
    fourthNumber
  )}`
);
