//ROZG
// 14. З клавіатури вводиться рівень доступу. Вивести на екран текстове представлення.
// 1.Аднміністратор
// 2.Менеджер
// 3.Редактор
// 4.Користувач

const accessLevel =
  prompt("Choose your access level:\n1. \n2. \n3. \n4. ") ||
  alert("Wrong data");
switch (accessLevel) {
  case "1":
    alert(`Admincheg`);
    break;
  case "2":
    alert(`Manager`);
    break;
  case "3":
    alert(`Editor`);
    break;
  case "4":
    alert(`User`);
    break;
  default:
    alert("Wrong data");
}
