/*Задача 7. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців*/

const showTable = (row, column) => {
  document.write(`<table border="black"`);
  for (let i = 0; i < row; i++) {
    document.write(`<tr>`);
    for (let j = 0; j < column; j++) {
      document.write(`<td>Hello, world!</td>`);
    }
    document.write(`</tr>`);
  }
  document.write(`</table>`);
};

const rowAmount = +prompt(`Enter amount of row`);
const columnAmount = +prompt(`Enter amount of column`);

showTable(rowAmount, columnAmount);
