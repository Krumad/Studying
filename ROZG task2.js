//ROZG
// Task 1.2.З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн. //

const goodsPrice = parseFloat(prompt("Enter price of the goods"));
const moneyAmount = parseFloat(prompt("Enter amount of the money"));
const priceAmountOdds = parseFloat(moneyAmount - goodsPrice);
if (moneyAmount < goodsPrice) {
  alert("Oops! Not enough gold. Try to work harder to gain more money!");
} else if (priceAmountOdds >= 4) {
  !confirm("Nice! Wanna buy a lotery ticket for 4 UAH? ");
}
