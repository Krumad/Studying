/* Задача 2. Дано послідовність оцінок учня. Підрахувати кількість:
4)	двійок
5)	кількість хороших оцінок (добре, відмінно);
6)	кількість оцінок, які нижче середнього.
 */

let gradesSequence = [2, 2, 4, 5, 3, 3, 4, 5];
console.log(`Length = ${gradesSequence.length}`);

let amountOfGradeTwo = 0;

let amountOfGradeFourFive = 0;

let amountOfGradeLowerThree = 0;

for (let i = 0; i < gradesSequence.length; i++) {
  if (gradesSequence[i] === 2) amountOfGradeTwo++;
  if (gradesSequence[i] === 4 || gradesSequence[i] === 5)
    amountOfGradeFourFive++;
  if (gradesSequence[i] < 3) amountOfGradeLowerThree++;
}

console.log(`The amount of two-grades = ${amountOfGradeTwo};
The amount of four-grades and five-grades = ${amountOfGradeFourFive};
The amount of grades lower then three  = ${amountOfGradeLowerThree}`);
