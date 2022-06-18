//ROZG
// Задача 15. З використанням операторів вибору реалізувати гру «Камінь ножниці папір» (користувач задає свій варіант, комп’ютер генерує випадковим чином),

const usersChoise =
  prompt("What do you choose:\n1.Rock \n2.Scissors \n3.Paper") ||
  alert("Wrong data");
const randomizer = Math.floor(Math.random() * 3) + 1;
let AI_choose;
switch (randomizer) {
  case 1:
    AI_choose = "AI choose=Rock";
    break;
  case 2:
    AI_choose = "AI choose=Scissors";
    break;
  case 3:
    AI_choose = "AI choose=Paper";
    break;
}
alert(AI_choose);
const winUserRock = usersChoise == "1" && randomizer == 2;
const winUserScissors = usersChoise == "2" && randomizer == 3;
const winUserPaper = usersChoise == "3" && randomizer == 1;
if (randomizer == usersChoise) {
  alert("Draw");
} else if (winUserRock || winUserScissors || winUserPaper) {
  alert("You win!");
} else {
  alert("You lose...");
}
