//ROZG
// Задача 0.1. На екран виводиться меню:
// 1. Веселий
// 2. Сумний
// 3. Обурений
// Користувач вводить номер пункту меню і на екрані з’являється відповідне зображення смайла.

const choice =
  parseInt(prompt("1.Vesely\n2.Sumnyy\n3.Obyrennyy")) || alert("error");
let display;
switch (choice) {
  case 1:
    display = String.fromCodePoint(0x1f604);
    alert(display);
    break;
  case 2:
    display = String.fromCodePoint(0x1f629);
    alert(display);
    break;
  case 3:
    display = String.fromCodePoint(0x1f621);
    alert(display);
    break;
  default:
    display = String.fromCodePoint(0x1f6ab);
    alert(display);
}
