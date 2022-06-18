//ROZG
// Task 1.3 Формування накладної. Вводиться назва товару, кількість, ціна і рік.  Значення року вводиться користувачем або ж дорівнює 2017 (у випадку, якщо користувач не ввів значення). Перевірити коректність введених даних . У випадку некоректності вивести відповідне повідомлення. //

const productName = prompt("Enter the product name");
const productAmount = parseInt(prompt("Enter the amount of product"));
const productPrice = parseFloat(prompt("Enter the price of product"));
const productYear = parseInt(prompt("Enter the year of the product")) || 2017;
if (productName && productAmount && productPrice) {
  alert("Not all parameters were entered. Be attentive");
}
