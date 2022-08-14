/*Задача 1. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.*/

const showSeason = (month) => {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return `It's a winter`;
    case 3:
    case 4:
    case 5:
      return `It's a spring`;
    case 6:
    case 7:
    case 8:
      return `It's a summer`;
    case 9:
    case 10:
    case 11:
      return `It's an autumn`;
    default:
      return "Wrong data";
  }
};
let monthsNumber = +prompt(`Enter the month number to get the season`);
alert(showSeason(monthsNumber));
