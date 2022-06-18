// ROZG
// 1.1.1. Найбільше серед двох замінити на 0. Якщо однакові, то замінити обидва на 1.

let firstSymbol = prompt("Enter first any letter or number");
let secondSymbol = prompt("Enter second any letter or number");
if (firstSymbol === secondSymbol) {
  firstSymbol = secondSymbol = 1;
} else if (firstSymbol > secondSymbol) {
  firstSymbol = 0;
} else {
  secondSymbol = 0;
}
alert(`And we got ${firstSymbol}, ${secondSymbol}`);
