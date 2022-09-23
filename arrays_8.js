/* 8.	Дано числовий масив розмірності N. Знайти кількість його локальних мінімумів. Локальним мінімумом називається елемент, значення якого менше від сусідів
 */

let currentArray = [1, 2, 3, 4, 5, 6, 6, 1, 2, 3, 4, 1, 3, 4, 9];
console.log(currentArray.length);

const getLocalMinimumsAmount = (array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1] && array[i] < array[i - 1]) {
      counter++;
    }
  }
  return counter;
};

console.log(getLocalMinimumsAmount(currentArray));
