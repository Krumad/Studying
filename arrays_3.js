/* Задача 3. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
 */

let goodsPrice = [14, 25, 100, 35, 62, 44, 155, 345];

let goodsNames = [
  "chocolate",
  "toothpaste",
  "flashlight",
  "pencil",
  "notebook",
  "sugar",
  "book",
  "red wine",
];

const usersMoneyAmount = 100;

for (let i = 0; i < goodsPrice.length; i++) {
  if (usersMoneyAmount >= goodsPrice[i]) {
    console.log(
      `Having a ${usersMoneyAmount} UAH you can buy ${goodsNames[i]}, which cost - ${goodsPrice[i]} UAH`
    );
  }
}
