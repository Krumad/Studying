//ROZG
// 6. З клавіатури вводяться імена двох дітей та кількість шоколадок. Вивести не екран ім’я того учня, у якого кількість шоколадок є більшою. //

const firstChildName = prompt("Name");
const chocoQuantityFirstChild = parseInt(
  prompt("Quantity of chocolate, first child")
);
const secondChildName = prompt("Name");
const chocoQuantitySecondChild = parseInt(
  prompt("Quantity of chocolate, second child")
);
if (chocoQuantityFirstChild > chocoQuantitySecondChild) {
  alert(firstChildName);
} else if (chocoQuantityFirstChild < chocoQuantitySecondChild) {
  alert(secondChildName);
} else {
  alert("Eqaul");
}
