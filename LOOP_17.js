//17. З клавіатури вводиться початкове знчення суми. Поки сума є меншою за 100 додавати до неї числа, які вводяться з клавіатури.

let totalSumm = +prompt("Enter the initial total value");
while (totalSumm < 100) {
  totalSumm += +prompt("Enter the number to add to the total");
}
document.write(`The total summary is = ${totalSumm}`);
