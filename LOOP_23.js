/*23. З клавіатури вводиться число. Знаходити суму цифр до тих пір. Поки сума не стане більшую за 20.*/ let summ = 0;
let usersNumber;
while (summ <= 20) {
  usersNumber = +prompt(`Enter number to add`);
  summ += usersNumber;
  alert(`The summary is ${summ}`);
}
document.write(`The summary = ${summ}`);
