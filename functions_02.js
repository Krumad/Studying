/*Задача 2. Створити функцію, яка за номером місяця повертає його назву.*/

const showMonthName = (month) => {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Wrong data";
  }
};
let monthsNumber = +prompt(`Enter the month number to get its name`);
alert(showMonthName(monthsNumber));
