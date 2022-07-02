//Задача 12. Створити таблицю 3*4 з використанням відповідних табличних тегів.

let tableRow = 4;
let tableColumn = 3;
document.write(`<table border=5>`);
for (let i = 0; i < tableRow; i++) {
  document.write(`<tr>`);
  for (let j = 0; j < tableColumn; j++) {
    document.write(`<td>TABLYA</td>`);
  }
  document.write(`</tr>`);
}
document.write(`</table>`);
