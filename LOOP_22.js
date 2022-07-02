/*22. Користувач загадує натуральне число від 1 до N. Шляхом задавання мінімальної кількості запитань знайти вказане число (застосувати бінарний пошук, на кожному кроці якого інтервал пошуку зменшується на 2 шляхом порівняння з елементом, який знаходиться у центрі поточного інтервалу).*/

let lowerBound = 1;
let upperBound = parseInt(
  prompt(`The range of guess number is from ${lowerBound} to `)
);
let questionsPool;
let middle = lowerBound + Math.floor((upperBound - lowerBound) / 2);
let wishedNumber = false;
while (!wishedNumber) {
  questionsPool = +prompt(
    `Your guessed number in relation to ${middle}: \n 1. Smaller \n 2. Bigger \n 3. Equal`
  );
  switch (questionsPool) {
    case 1:
      upperBound = middle - 1;
      middle = lowerBound + Math.floor((upperBound - lowerBound) / 2);
      break;
    case 2:
      lowerBound = middle + 1;
      middle = lowerBound + Math.floor((upperBound - lowerBound) / 2);
      break;
    case 3:
      wishedNumber = true;
      break;
    default:
      alert(`Error`);
      break;
  }
}
alert(`Your wished number is - ${middle}`);
