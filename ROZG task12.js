//ROZG
// 7. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const age = parseInt(prompt("Age"));
let message;
if (age >= 0 && age < 6) {
  message = "Child";
} else if (age < 17) {
  message = "Pupil";
} else if (age < 22) {
  message = "Student";
} else if (age < 65) {
  message = "Employee";
} else if (age < 122) {
  message = "Pensioner";
} else {
  message = "Try again";
}
alert(message);
