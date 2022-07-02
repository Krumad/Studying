//Задача 13. Динамічно створити поля для введення назви предмета та кількості балів з введеної користувачем кількості предметів (для кожного предмета: два input з відповідними тегами label).

let subjectsNumber = +prompt(`Enter the number of subjects`);
for (let i = 0; i < subjectsNumber; i++) {
  document.write(
    `<label>Subject ${i + 1} </label><input><br><label>Score ${
      i + 1
    } </label> <input> <br><br>`
  );
}
