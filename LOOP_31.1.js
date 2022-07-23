/*31. Морський бій. Комп’ютер випадковим чином розміщує одиночний корамель на полі 5*5. З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. Спробуйте відоразити гру графічно.*/

let fieldsRow = +prompt(`Enter the height of the field`);
let fieldsColumn = +prompt(`Enter the width of the field`);
document.write(`<table style=width:50% align=center>`);
document.write(
  `<caption style=color:red; font-size:7em>WORLD WAR III</caption>`
);
for (let i = 0; i < fieldsRow; i++) {
  document.write(`<tr style=height:100px>`);
  for (let j = 0; j < fieldsColumn; j++) {
    document.write(`<td id=${i + 1}${j + 1} style=width: 100%></td>`);
  }
  document.write(`</tr>`);
}
