//ROZG
// Задача 14.1. Змінити попереднє завдання вивівши «працівник», якщо це перші 3 пункти.Задача 14.1. Змінити попереднє завдання вивівши «працівник», якщо це перші 3 пункти.

const accessLevel =
  prompt("Choose your access level:\n1. \n2. \n3. \n4. ") ||
  alert("Wrong data");
switch (accessLevel) {
  case "1":
  case "2":
  case "3":
    alert(`Employee`);
    break;
  case "4":
    alert(`User`);
    break;
  default:
    alert("Wrong data");
}
