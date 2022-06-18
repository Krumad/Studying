//ROZG
// 4. З клавіатури вводиться кількість балів. Вивести на екран оцінку (задовільно, добре чи відмінно).//

const mark = parseInt(prompt("Your mark is"));
let result;
switch (mark) {
  case 1:
  case 2:
    result = "Very bad";
    break;
  case 3:
    result = "Unsatisfactory";
    break;
  case 4:
    result = "Good";
    break;
  case 5:
    result = "Excellent";
    break;
  default:
    result = "Wrong mark";
    break;
}
alert(result);
