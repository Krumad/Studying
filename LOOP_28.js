/*28. З клавіатури вводяться поступово числа. Знайти два найбільші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.*/

let usersNumber;
let secondBiggestNumber = 0;
let firstBiggestNumber = +prompt(`Enter number`) || 0;
do {
  usersNumber = +prompt(`Enter number`) || 6;
  if (usersNumber > firstBiggestNumber) {
    secondBiggestNumber = firstBiggestNumber;
    firstBiggestNumber = usersNumber;
  } else if (usersNumber > secondBiggestNumber) {
    secondBiggestNumber = usersNumber;
  }
} while (Math.abs(secondBiggestNumber - firstBiggestNumber) > 5);
