/* 14.	Дано числовий масив розмірності N. Знайти кількість елементі, що більші за перший.
 */

const currentArray = [1, 2, 3, 4, 5, 6, 6, 1, 2, 3, 4, 1, 3, 4, 9];
console.log(currentArray.length);

const getNumberAmountBiggerThenFirst = (array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[0] < array[i]) {
      counter++;
    }
  }
  return counter;
};

console.log(getNumberAmountBiggerThenFirst(currentArray));
