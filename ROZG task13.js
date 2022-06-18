//ROZG
//8. З клавіатури вводиться поточний час (дві змінні цілого типу: кількість годин і кількість хвилин) протягом якогось із перших 3 уроків (початок о 8.30).  З’ясувати, який із трьох триває урок.

const firstLessonsHours = 8;
const secondLessonsHours = 9;
const thirdLessonsHours = 10;
const endLessonsHours = 11;
const lessonsMinutes = 30;
const hoursNumber = parseInt(prompt("Hours"));
const minutesNumber = parseInt(prompt("Minutes"));
const firstLesson =
  (hoursNumber === firstLessonsHours && minutesNumber >= lessonsMinutes) ||
  (hoursNumber === secondLessonsHours && minutesNumber < lessonsMinutes);
const secondLesson =
  (hoursNumber === secondLessonsHours && minutesNumber >= lessonsMinutes) ||
  (hoursNumber === thirdLessonsHours && minutesNumber < lessonsMinutes);
const thirdLesson =
  (hoursNumber === thirdLessonsHours && minutesNumber >= lessonsMinutes) ||
  (hoursNumber === endLessonsHours && minutesNumber < lessonsMinutes);
if (firstLesson) {
  alert("Its a first lesson now");
} else if (secondLesson) {
  alert("Its a second lesson now");
} else if (thirdLesson) {
  alert("Its a third lesson now");
} else {
  alert("Wrong");
}
