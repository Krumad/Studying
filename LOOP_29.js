/*29. З клавіатури вводяться поступово числа. Знайти два найменші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.*/

let usersNumber;
let secondSmallestNumber = 0;
let firstSmallestNumber = +prompt(`Enter number`) || 0;
do {
  usersNumber = +prompt(`Enter number`) || 6;
  if (usersNumber < firstSmallestNumber) {
    secondSmallestNumber = firstSmallestNumber;
    firstSmallestNumber = usersNumber;
  } else if (usersNumber < secondSmallestNumber) {
    secondSmallestNumber = usersNumber;
  }
} while (Math.abs(secondSmallestNumber - firstSmallestNumber) > 5);
