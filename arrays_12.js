/* 12.	Дано числовий масив розмірності N. Знайти кількість його локальних максимумів.
 */

const currentArray = [1, 2, 3, 4, 5, 6, 6, 1, 2, 3, 4, 1, 3, 4, 9];
console.log(currentArray.length);

const getLocalMaximumsAmount = (array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
      counter++;
    }
  }
  return counter;
};

console.log(getLocalMaximumsAmount(currentArray));
