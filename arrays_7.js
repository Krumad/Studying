/* 7.	Дано масив розмірності N і число k ( k<N). Здійснити циклічний зсув елементів масиву вліво на k позицій. Наприклад для масиву [1,2,3,4,5,6] та k=2 після виконання зсуву отримуємо [3,4,5,6,1,2]. */

const currentArray = [1, 2, 3, 4, 5, 6];
const shiftStep = 2;

const shiftToLeftByStepInArray = (array, step) => {
  const newArray = [];
  let j = 0;

  for (let i = 0; i < array.length; i++) {
    j = i + step;
    if (j >= array.length) {
      j = j - array.length;
    }
    newArray[i] = array[j];
  }

  return newArray;
};

console.log(shiftToLeftByStepInArray(currentArray, shiftStep));
