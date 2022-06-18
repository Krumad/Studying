//ROZG
// 12 З клавіатури вводиться рейтинг користувача. 1-Профі, 2-Досвідчений, 3-Знаючий, 4-Початківець.
//Чи доволено робити коментарі (1, 2 -дозволено, 3,4- не дозволено)

const usersRating =
  prompt(
    "Enter the level of user:\n1. Profi\n2. Experienced\n3. Knowing\n4. Beginner"
  ) || alert("Wrong data");
switch (usersRating) {
  case "1":
  case "2":
    alert("You can comment");
    break;
  case "3":
  case "4":
    alert("You can not comment");
    break;
  default:
    alert("Wrong data");
}
