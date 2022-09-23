/* 17.	Дано ціни 4 товарів. Визначити, скільки кожного виду товарів може купити користувач за наявну у нього кількість грошей.
 */

const goodsPrice = [55.5, 45.5, 66.99, 68.0, 40.0];

const usersMoney = 250.0;

const howManyCanIBuy = (priceOfGoods, amountOfmoney) => {
  for (let i = 0; i < priceOfGoods.length; i++) {
    let counter = Math.floor(amountOfmoney / priceOfGoods[i]);
    console.log(
      `For ${amountOfmoney} UAH you can buy ${counter} pcs of goods that cost ${priceOfGoods[i]} UAH`
    );
  }
};

howManyCanIBuy(goodsPrice, usersMoney);
