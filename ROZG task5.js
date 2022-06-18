//ROZG
// Task 2.1 - З клавіатури вводяться два числа. Вибравши номер операції обчислити результат. //

const firstNumber = parseFloat(prompt("Enter first any number"));
const secondNumber = parseFloat(prompt("Enter second any number"));
const operationsNumber = parseInt(
  prompt("Enter the number of operation(1-4) you want to commit")
);
switch (operationsNumber) {
  case 1:
    result = firstNumber + secondNumber;
    break;
  case 2:
    result = firstNumber - secondNumber;
    break;
  case 3:
    result = firstNumber * secondNumber;
    break;
  case 4:
    result = firstNumber / secondNumber;
    break;
  default:
    result = "Try again. Choose operation from 1 to 4";
}
alert(result);
