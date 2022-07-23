/*32. Тир. На полі з 10 клітинок розміщують зайця. За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку. З клавіатури вводиться позиція пострілу. Гра продовжується поки  у користувача не закінчаться патрони (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.*/

let fieldsLength = +prompt(`Enter the width of the field`);

document.write(
  `<table style=width:50% height:50% align=center>
  <caption style=color:red; font-size:10em><b>Dare to shoot a hare!</b></caption>
  <tr>`
);
for (let i = 0; i < fieldsLength; i++) {
  document.write(`<td id=${i + 1} ></td>`);
}
document.write(`</tr>`);
