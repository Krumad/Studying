/* 9.	Дано масив розмірності N.  Визначити максимальну кількість його однакових елементів.
 */

const currentArray = [1, 2, 3, 4, 5, 6, 6, 1, 2, 2, 3, 4, 4, 4];
console.log(currentArray.length);

const maxSimilarElementsCounter = (array) => {
  let maxElements = 0;
  for (let i = 0; i < array.length; i++) {
    let firstCounter = 1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        firstCounter++;
        if (firstCounter > maxElements) {
          maxElements = firstCounter;
        }
      }
    }
  }
  return maxElements;
};

console.log(maxSimilarElementsCounter(currentArray));
