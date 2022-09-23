/* 15.	Дано назви та ціни 4 товарів. Вивести назви товарів, ціна яких не перевищує 1000грн
 */

const goodsNames = [`TV panel`, `Book`, `Cup`, `Cookie`];
const goodsPrice = [11000, 350, 255, 99];

const maxPrice = 1000;

for (let i = 0; i < goodsPrice.length; i++) {
  if (goodsPrice[i] <= maxPrice) {
    console.log(goodsNames[i]);
  }
}
