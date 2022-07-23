/*27. Комп’ютер загадує два випадкових числа від 1 до 10. Вгадати обидва числа шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача.*/

let AI_riddled_first_number = Math.floor(Math.random() * 10) + 1;
let AI_riddled_second_number = Math.floor(Math.random() * 10) + 1;
console.log(AI_riddled_first_number, AI_riddled_second_number);
let usersNumber;
let triesCount = 0;
let isFirstNumberGuessed;
let isSecondNumberGuessed;
while (!isFirstNumberGuessed || !isSecondNumberGuessed) {
  usersNumber = +prompt(
    `Enter number trying to guess AI's numbers (FROM 1 TO 10)`
  );
  triesCount++;
  if (!isFirstNumberGuessed && usersNumber === AI_riddled_first_number) {
    alert(`You've find first number!`);
    isFirstNumberGuessed = true;
  }
  if (!isSecondNumberGuessed && usersNumber === AI_riddled_second_number) {
    alert(`You've find second number!`);
    isSecondNumberGuessed = true;
  }
}
alert(`You had to use ${triesCount} attempts`);
