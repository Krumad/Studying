/*    Задача 3. Вивести на екран таблицю
-------
| | | |
-------
| | | |
-------
| | | |
-------    */
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 7; j++) {
    document.write("-&nbsp;");
  }
  document.write("<br>");
  for (let k = 0; k < 4; k++) {
    document.write("| &nbsp;&nbsp;");
  }
  document.write("<br>");
}
for (let l = 0; l < 7; l++) {
  document.write("-&nbsp;");
}
