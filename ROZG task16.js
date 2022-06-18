//ROZG
// 11. Користувач може здійснити покупку у одному із двох відділів («побутова техніка» або «інструменти»). При цьому у кожному із відділів йому будуть пропонувати один із перерахованих товарів:
// «побутова техніка»:
// -	телевізор; -	праска;-	планшет;     «інструменти» -	лопата;-	граблі;-	мітла;-	пила.
//  Вивести на екран назву товару, яку вибрав користувач.

const departmentChoose =
  prompt(
    "Enter the department, where you want to buy goods:\n1. Home appliances department\n2. Tools"
  ) || alert("wrong data");
let goodsChoose;
if (departmentChoose == "1") {
  goodsChoose = prompt("Choose goods: \n1. TV \n2. Iron \n3. Tablet");
  switch (goodsChoose) {
    case "1":
      alert("You bought TV");
      break;
    case "2":
      alert("You bought Iron");
      break;
    case "3":
      alert("You bought Tablet");
      break;
    default:
      alert("You didnt buy anything");
  }
} else if (departmentChoose == "2") {
  goodsChoose = prompt(
    "Choose goods: \n1. Shovel \n2. Rake \n3. Saw \n4. Brum"
  );
  switch (goodsChoose) {
    case "1":
      alert("You bought shovel");
      break;
    case "2":
      alert("You bought rake");
      break;
    case "3":
      alert("You bought saw");
      break;
    case "4":
      alert("You bought brum");
      break;
    default:
      alert("You didnt buy anything");
  }
} else {
  alert("Try again");
}
