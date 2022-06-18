//ROZG
// Задача 2.2. Модифікувати попереднє завдання ввівши не номер операції, а саму операцію. //

const firstNumber = parseFloat(prompt("Enter first any number"));
const secondNumber = parseFloat(prompt("Enter second any number"));
const operationsNumber = prompt(
  "Enter the symbol of the operation(+,-,*,/) you want to commit"
);
let result;
switch (operationsNumber) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;
  default:
    result = "Try again";
}
alert(result);
