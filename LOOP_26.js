/*26. Комп’ютер загадує випадкове число від 1 до 10. Вгадати число шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача. */

let AI_riddled_number = Math.floor(Math.random() * 10) + 1;
let usersNumber;
let triesCount = 0;
while (usersNumber !== AI_riddled_number) {
  usersNumber = +prompt(
    `Enter number trying to guess AI's number (FROM 1 TO 10)`
  );
  triesCount++;
}
alert(`You had to use ${triesCount} attempts`);
