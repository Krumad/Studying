/*  21. На екрані виводиться меню:
	1.Ініціалізація (сума=0)
	2.Додати 2
	3.Додати 3
	4.Відняти 2
	5.Відняти 3.
	6.Вивести суму
	7.Вихід.
Шляхом поступового вибору відповідних пунктів спробувати отримати число N, яке вводиться з клавіатури.
 */

let menu;
let summ = 0;
let usersNumber = +prompt(`Enter the number to find`);
do {
  menu = +prompt(
    `Choose what to do to get ${usersNumber}: \n 1. Initilization (summ=0) \n 2. Plus 2 \n 3. Plus 3 \n 4. Minus 2 \n 5. Minus 3 \n 6. Show the summary \n 7. Exit
    `
  );
  console.log(menu);
  switch (menu) {
    case 1:
      summ = 0;
      break;
    case 2:
      summ += 2;
      break;
    case 3:
      summ += 3;
      break;
    case 4:
      summ -= 2;
      break;
    case 5:
      summ -= 3;
      break;
    case 6:
      alert(`The summary = ${summ}`);
      break;
    case 7:
      alert(`Exit`);
      break;
  }
  if (summ === usersNumber) {
    alert(`Gotcha!`);
    break;
  }
} while (menu !== 7);
document.write(
  `User's start number = ${usersNumber} and the summary of operations = ${summ}`
);
