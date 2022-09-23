/* 4. Описати літерал, що зберігає ____ та вивести його.
1.	оцінки за екзамен в національній системі (відмінно, добре, …).
2.	дні тижня.
3.	місяці року.
4.	жіночі імена (щонайменше 7 шт.)
5.	чоловічі імена (щонайменше 7 шт.)
6.	кольори веселки.
7.	прізвища студентів Вашої групи.
8.	прізвища студентів Вашої групи.
9.	назви фруктів (щонайменше 7 шт.)
10.	назви овочів (щонайменше 7 шт.)
11.	оцінки за екзамен в системі ECTS (A,B,…).
 */

const showArrayElements = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}. ${array[i]}`);
  }
  console.log(``);
};

let marksNationalSystem = ["great", "good", "average", "bad", "very bad"];
showArrayElements(marksNationalSystem);

let weekDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
showArrayElements(weekDays);

let yearMonths = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
showArrayElements(yearMonths);

let womenNames = ["Ksristy", "Iryna", "Ada", "Bella", "Ivy", "Sheeva", "Eva"];
showArrayElements(womenNames);

let menNames = ["Maks", "Sancho", "Andrew", "Billy", "Willy", "Mike", "Taras"];
showArrayElements(menNames);

let rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "dark blue",
  "violet",
];
showArrayElements(rainbowColors);

let groupStudentsSurnames = ["Bot", "Grot", "Shprot", "Nudot"];
showArrayElements(groupStudentsSurnames);

let fruitNames = [
  "apple",
  "orange",
  "pear",
  "kiwi",
  "plum",
  "apricot",
  "peach",
];
showArrayElements(fruitNames);

let vegetableNames = [
  "potato",
  "cucumber",
  "tomato",
  "cabbage",
  "eggplant",
  "carrot",
  "pepper",
];
showArrayElements(vegetableNames);

let marksECTS = ["A", "B", "C", "D", "E"];
showArrayElements(marksECTS);
