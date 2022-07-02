//16. З клавіатури поступово вводяться символи поки не буде введено символ «а». Вивести рядок символів у зворотному порядку.

let usersSymbol = null;
let symbolSumm = "";

for (let i = 0; usersSymbol !== "a"; i++) {
  usersSymbol = prompt("Type in the symbol");
  if (usersSymbol === "a" || usersSymbol === null) {
    break;
  }
  symbolSumm = usersSymbol + symbolSumm;
}
document.write(`${symbolSumm}`);
