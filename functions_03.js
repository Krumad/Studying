/*Задача 3. Створити функцію, яка за номером дня тижня повертає кількість уроків(так, як у вас було у школі).*/

const showLessonsAmount = (day) => {
  switch (day) {
    case 1:
      return "6 lessons";
    case 2:
      return "5 lessons";
    case 3:
      return "6 lessons";
    case 4:
      return "5 lessons";
    case 5:
      return "4 lessons";
    default:
      return "Wrong data";
  }
};
let weeksDayNumber = +prompt(
  `Enter the day's number of the week to get amount of lessons on this day`
);
alert(showLessonsAmount(weeksDayNumber));
