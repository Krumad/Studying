/*    11.  Кожне  … Вивести початкові та отримані значення.
1.	двоцифрове натуральне число > 80 збільшити на 7.
2.	двоцифрове натуральне число < 30 збільшити у 5 разів.
3.	натуральне число < 20 збільшити на 10.
4.	двоцифрове натуральне парне число збільшити у 5  разів.
5.	двоцифрове натуральне число > 30 збільшити на 10.
6.	натуральне число < 20 збільшити у 9 разів. 
7.	 двоцифрове натуральне непарне число піднести до квадрата.
8.	трицифрове натуральне число кратне 7 зменшити в 7 разів
9.	двоцифрове натуральне число > 15 збільшити у 9   разів
10.	трицифрове натуральне число зменшити на 100;
 ОК */

let usersNumber = 0;
let obtainedNumber = null;

for (let i = 0; usersNumber !== undefined; i++) {
  usersNumber = +prompt("Type in the number") || undefined;
  if (usersNumber === undefined) {
    break;
  }
  document.write(`<H3><U>Number ${i + 1}: ${usersNumber}<br></U></H3>`);
  if (usersNumber >= 0 && usersNumber <= 99) {
    if (usersNumber > 80 && usersNumber <= 99) {
      //1. двоцифрове натуральне число > 80 збільшити на 7.
      obtainedNumber = usersNumber + 7;
      document.write(
        `<b>1. Two-digit natural number > 80 increase by 7 </b> = <B><I>${obtainedNumber}</I></B> <br><HR>`
      );
    }
    if (usersNumber >= 10 && usersNumber < 30) {
      //2.	двоцифрове натуральне число < 30 збільшити у 5 разів.
      obtainedNumber = usersNumber * 5;
      document.write(
        `<b>2. Increase the two-digit natural number < 30 5 times </b> = <B><I>${obtainedNumber}</I></B> <br><HR>`
      );
    }
    if (usersNumber >= 10 && usersNumber < 99 && usersNumber % 2 == 0) {
      //4.	двоцифрове натуральне парне число збільшити у 5  разів.
      obtainedNumber = usersNumber * 5;
      document.write(
        `<b>4. Increase the two-digit natural even number by 5 times </b> = <B><I>${obtainedNumber}</I></B> <br><HR>`
      );
    }
    if (usersNumber > 30 && usersNumber <= 99) {
      //5.	двоцифрове натуральне число > 30 збільшити на 10.
      obtainedNumber = usersNumber + 10;
      document.write(
        `<b>5. Increase the two-digit natural number > 30 by 10 </b> = <B><I>${obtainedNumber}</I></B> <br><HR>`
      );
    }
    if (usersNumber >= 0 && usersNumber < 20) {
      //3.	натуральне число < 20 збільшити на 10.
      obtainedNumber = usersNumber + 10;
      document.write(
        `<b>3. Increase the natural number < 20 by 10 </b> = <B><I>${obtainedNumber}</I></B> <br><HR>`
      );
      obtainedNumber = usersNumber * 9; //6. натуральне число < 20 збільшити у 9 разів.
      document.write(
        `<b>6. Increase the natural number < 20 by 9 times </b> = <B><I>${obtainedNumber}</I></B> <br><HR>`
      );
    }
    if (usersNumber >= 10 && usersNumber < 99 && usersNumber % 2 != 0) {
      obtainedNumber = usersNumber ** 2; //7.	 двоцифрове натуральне непарне число піднести до квадрата.
      document.write(
        `<b>7. Bring a two-digit natural odd number to the square </b> = <B><I>${obtainedNumber}</I></B> <br><HR>`
      );
    }
    if (usersNumber >= 15 && usersNumber <= 99) {
      //9.	двоцифрове натуральне число > 15 збільшити у 9   разів
      obtainedNumber = usersNumber * 9;
      document.write(
        `<b>9. Increase the two-digit natural number > 15 by 9 times </b> = <B><I>${obtainedNumber}</I></B> <br><HR>`
      );
    }
  }
  if (usersNumber >= 100 && usersNumber <= 999) {
    if (usersNumber >= 100 && usersNumber <= 999 && usersNumber % 7 == 0) {
      //8.	трицифрове натуральне число кратне 7 зменшити в 7 разів
      obtainedNumber = usersNumber / 7;
      document.write(
        `<b>8. Reduce a three-digit natural number multiple of 7 by 7 times </b> = <B><I>${obtainedNumber}</I></B> <br><HR>`
      );
    }
    if (usersNumber >= 100 && usersNumber <= 999) {
      //10.	трицифрове натуральне число зменшити на 100;
      obtainedNumber = usersNumber - 100;
      document.write(
        `<b>10. Reduce the three-digit natural number by 100</b> = <B><I>${obtainedNumber}</I></B><br><HR>`
      );
    }
  }
}
