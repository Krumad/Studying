/*25.З клавіатури вводиться вартість одиниці товару. Поки користувач не введе суму грошей, яка достатня для купівлі товару або не відмовиться від купівлі давати можливість вводити суму грошей.*/

let goodsPrice = parseFloat(prompt(`The price of that goods`));
let usersMoney;
let usersMoneyAmount = 0;
while (usersMoneyAmount < goodsPrice) {
  usersMoney = parseFloat(prompt(`Enter the amount of your money`));
  usersMoneyAmount = usersMoneyAmount + usersMoney;
  if (usersMoneyAmount < goodsPrice) {
    if (confirm(`Do you want to add?`)) {
      continue;
    } else {
      alert(`Cya!`);
      break;
    }
  } else {
    document.write(`That's ok. You have bought that stuff!`);
  }
}
