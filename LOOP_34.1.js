/*34.Спробуйте модифікувати попередню гру для випадку, коли танк також може стріляти по вашій гарматі (ваша гармата також знаходиться на цьому ж полі).*/

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
