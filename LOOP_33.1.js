/*33. Танчики. На полі з 10 клітинок розміщують танк. За один крок танк може переміщуватися на відстань від 0 до 1 у  будь-якому напрямку (в межах поля). При влучанні броня танка пошкоджується на 30 балів (всього 100). Гра продовжується поки або не закінчаться снаряди (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.*/

let fieldsLength = +prompt(`Enter the width of the field`);

document.write(
  `<table style=width:50% height:50% align=center>
  <caption style=color:red; font-size:7em><b>KILL THAT TANK!</b></caption>
  <tr>`
);
for (let i = 0; i < fieldsLength; i++) {
  document.write(`<td id=${i + 1} ></td>`);
}
document.write(`</tr>`);
