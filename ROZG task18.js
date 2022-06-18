//ROZG
// 13. З клавіатури ввоидться номер місяця, вивести на екран пору року

const monthsNumber =
  prompt(
    "Choose the month:\n1. January\n2. February\n3. March\n4. April\n5. May\n6. June\n7. July\n8. August\n9. September\n10. October\n11. November\n12. December"
  ) || alert("Wrong data");
switch (monthsNumber) {
  case "12":
  case "1":
  case "2":
    alert(`It's a winter`);
    break;
  case "3":
  case "4":
  case "5":
    alert(`It's a spring`);
    break;
  case "6":
  case "7":
  case "8":
    alert(`It's a summer`);
    break;
  case "9":
  case "10":
  case "11":
    alert(`It's an autumn`);
    break;
  default:
    alert("Wrong data");
}
