/*  19. З клавіатури вводяться два числа N i M (N<M). Вивести а екран числа
N---M
N+1 --- M-1
N+2 --- M-2
N+3 --- M-3
. . . . . . 
Виведення завершити коли число справа стане меншим за число зліва. */

let firstUsersNumber = +prompt(`Enter the first number`);
let secondUsersNumber = +prompt(
  `Enter the second number (MUST BE BIGGER THAN FIRST)`
);
while (firstUsersNumber <= secondUsersNumber) {
  document.write(`<i>${firstUsersNumber} --- ${secondUsersNumber}</i><br><HR>`);
  firstUsersNumber++;
  secondUsersNumber--;
}
