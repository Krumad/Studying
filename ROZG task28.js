// Задача 19. Полювання. Заєць знаходиться у верхньому лівому кутку поля. Поле складається з двох рядків і двох стовпців.

// За один крок заєць може стрибнути у будь-яку із вільних клітинок. Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. Якщо користувач зловить зайця за другою спробою, то одержує 50 балів.

const rowNumber = 2;
const columnNumber = 2;
alert(`We have field in ${rowNumber} rows and ${columnNumber} columns!`);
let trapPositionRow =
  +prompt("Set your trap for hare, row: \n1. \n2.") || alert("Error");
let trapPositionColumn =
  +prompt("Set your trap for hare, column: \n1. \n2.") || alert("Error");
let haresPositionRow = Math.floor(Math.random() * 2 + 1);
let haresPositionColumn = Math.floor(Math.random() * 2 + 1);
if (
  trapPositionRow === haresPositionRow &&
  trapPositionColumn === haresPositionColumn
) {
  alert("You got 100 points!");
} else {
  alert("You are bad hunter. Try again!");
  trapPositionRow =
    +prompt("Set your trap for hare, row: \n1. \n2.") || alert("Error");
  trapPositionColumn =
    +prompt("Set your trap for hare, column: \n1. \n2.") || alert("Error");
  haresPositionRow = Math.floor(Math.random() * 2 + 1);
  haresPositionColumn = Math.floor(Math.random() * 2 + 1);
  if (
    trapPositionRow === haresPositionRow &&
    trapPositionColumn === haresPositionColumn
  ) {
    alert("Finally! You got 50 points!");
  } else {
    alert("Not today. Maybe hunting is not for you?");
  }
}
