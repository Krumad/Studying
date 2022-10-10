/* 13. Дано масив розмірності N. Назвемо серією групу однакових елементів що йдуть поспіль, а довжиною серії - кількість цих елементів (довжина серії може дорівнювати. Додати після кожної серії елемент з текстом «серія k», де k – порядковой номер серії */

const currentArray = [
  2, 2, 9, 105, 1, 1, 1, 2, 3, 3, 4, 4, 17, 98, 98, 99, 105, 105,
];

const arraySeries = (array) => {
  let arraySeries = [];

  for (let i = 0, k = 1; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        arraySeries[i] = array[i];
        break;
      } else {
        arraySeries[i] = array[i];
        arraySeries[j] = array[j];
        if (array[j] !== array[j + 1]) {
          arraySeries[j + 1] = `serie ${k}`;
          k++;
          i = j + 2;
        }
      }
    }
    if (array[array.length - 1] !== array[array.length - 2]) {
      arraySeries[i] = array[i];
    }
  }
  return arraySeries;
};
console.log(arraySeries(currentArray));
