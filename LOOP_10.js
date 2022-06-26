/*    10.	Користувач вводить числа поки не натисне відміну. Знайти 
1.	кількість парних; ОК
2.	добуток непарних; ОК
3.	суму двоцифрових; ОК
4.	середнє арифметичне додатних; ОК
5.	найбільше від’ємне;
6.	кількість більших за перше число; ОК
7.	середнє геометричне додатних; ОК
8.	найменше з них;
9.	кількість трицифрових; ОК
10.	добуток кратних 5;     ОК */

let usersNumber = 0;
let evenCount = 0;
let oddsProduct = 1;
let twoDigitsSumm = 0;
let arithmeticsPositivNumbers = 0;
let positivNumbersCount = 0;
let biggestNegativeNumber = null;
let biggerThenFirstNumbersCount = 0;
let firstNumber;
let geometricsPositiv = 1;
let smallestPositiveNumber = null;
let amountThreeDigits = 0;
let productFivesMultiple = 1;

for (let defaultNumber = 0; usersNumber !== undefined; defaultNumber++) {
  usersNumber = prompt("Type in the number") || undefined;
  if (usersNumber === undefined) {
    break;
  }
  if (usersNumber % 2 === 0) {
    evenCount++; // 1. кількість парних
  } else {
    oddsProduct = oddsProduct * usersNumber; // 2. добуток непарних
  }
  if (
    (usersNumber >= 10 && usersNumber <= 99) ||
    (usersNumber <= -10 && usersNumber >= -99)
  ) {
    twoDigitsSumm = +twoDigitsSumm + +usersNumber; // 3. сума двоцифрових
  }
  if (usersNumber > 0) {
    positivNumbersCount++;
    arithmeticsPositivNumbers = +arithmeticsPositivNumbers + +usersNumber; // 4. середнє арифметичне
    geometricsPositiv = geometricsPositiv * usersNumber; // 7. середнє геометричне
    if (
      smallestPositiveNumber === null ||
      smallestPositiveNumber > usersNumber
    ) {
      smallestPositiveNumber = +usersNumber; // 8. найменше з додатних
    }
  }
  if (usersNumber < 0) {
    //5. найбільше від'ємне
    if (biggestNegativeNumber === null || biggestNegativeNumber < usersNumber)
      biggestNegativeNumber = +usersNumber;
  }
  if (defaultNumber === 0) {
    firstNumber = +usersNumber;
  }
  if (firstNumber < usersNumber) {
    biggerThenFirstNumbersCount++; // 6. кількість більших за перше число
  }
  if (
    (usersNumber >= 100 && usersNumber <= 999) ||
    (usersNumber <= -100 && usersNumber >= -999)
  ) {
    amountThreeDigits++; // 9. кількість трицифрових
  }
  if (usersNumber % 5 === 0) {
    productFivesMultiple = productFivesMultiple * usersNumber; // 10. добуток кратних п'яти
  }
}
arithmeticsPositivNumbers = arithmeticsPositivNumbers / positivNumbersCount; // 4. середнє арифметичне
geometricsPositiv = Math.pow(geometricsPositiv, 1 / positivNumbersCount); // 7. середнє геометричне
document.write(
  `<b>Evens count</b> = <B><I>${evenCount}</I></B> <br><HR>
  <b>Odds product</b> = <B><I>${oddsProduct}</I></B> <br><HR>
  <b>Summ of two digit numbers</b> = <B><I>${twoDigitsSumm}</I></B> <br><HR>
  <b>Arithmetic mean of positive numbers</b> = <B><I>${arithmeticsPositivNumbers}</I></B> <br><HR> 
  <b>The count of bigger numbers then first user number</b> = <B><I>${biggerThenFirstNumbersCount}</I></B> <br><HR>
  <b>The geometric mean of positive numbers</b> = <B><I>${geometricsPositiv}</I></B> <br><HR>
  <b>The count of three digit numbers</b> = <B><I>${amountThreeDigits}</I></B> <br><HR>
  <b>The bigest negative number</b> = <B><I>${biggestNegativeNumber}</I></B> <br><HR> 
  <b>The smallest positive number</b> = <B><I>${smallestPositiveNumber}</I></B> <br><HR>
  <b>The product of multiple of five numbers</b> = <B><I>${productFivesMultiple}</I></B><br><HR>`
);
