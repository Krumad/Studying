/* 6.	Дано цілочисловий  масив розмірності N. Якщо він є перестановкою, то вивести ТАК, у противному випадку вивести номер першого недопустимого елемента.
 */

const firstArray = [4, 2, 3, 1];
const secondArray = [7, 2, 3, 5, 0, 1];

const isArrayRearranged = (array) => {
  for (let i = 0, temp = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  for (let k = 0; k < array.length; k++) {
    if (array[k + 1] - array[k] >= 2) {
      return array[k + 1];
    }
  }
  return `TAK`;
};

console.log(isArrayRearranged(firstArray));
console.log(isArrayRearranged(secondArray));
