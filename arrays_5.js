/* 5.	Дано масив розмірності N. Назвемо серією групу однакових елементів що йдуть поспіль, а довжиною серії - кількість цих елементів (довжина серії може дорівнювати 0. Вивести масив, що містить довжини всіх серій вихідного масиву.
 */

const currentArray = [
  1, 2, 3, 4, 5, 6, 1, 2, 5, 2, 3, 3, 3, 3, 3, 5, 2, 3, 2, 5, 2, 6, 7, 7, 8, 9,
];

const arraySeries = (array) => {
  let arraySeries = [];

  for (let i = 0, k = 0, counter = 1; i < array.length; i = i + counter) {
    counter = 1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        arraySeries[k] = ++counter;
        continue;
      } else if (j - i === 1) {
        arraySeries[k] = 0;
      }
      k++;
      break;
    }

    if (array[array.length - 1] !== array[array.length - 2]) {
      arraySeries[k] = 0;
    }
  }
  return arraySeries;
};
console.log(arraySeries(currentArray));
