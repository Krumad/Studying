/* Задача 20. Гра в кості. Правила гри:
1) користувач може кинути кості не більше двох разів (користувач сам вирішує чи робити, чи не робити другий кидок);
2) якщо випадає парне число, то кількість балів збільшується на це число;
3) якщо випадає непарне число, то кількість балів зменшується на це число;
4) виграє той, у кого кількість балів більша. */

alert("DICE");
alert(`First player's turn!`);
let firstDice = Math.floor(Math.random() * 6 + 1);
let secondDice = Math.floor(Math.random() * 6 + 1);
alert(`You got ${firstDice} and ${secondDice}`);
let resultFirstDice = firstDice % 2 == 0 ? "even" : "odd";
let resultSecondDice = secondDice % 2 == 0 ? "even" : "odd";
let summResultAlpha = 0; //alpha - first player
if (resultFirstDice == "even" && resultSecondDice == "even") {
  summResultAlpha = firstDice * 2 + secondDice * 2;
  alert(`You got = ${summResultAlpha} from 1st throw`);
} else if (resultFirstDice == "even" && resultSecondDice == "odd") {
  summResultAlpha = firstDice * 2 - secondDice;
  alert(`You got = ${summResultAlpha} from 1st throw`);
} else if (resultFirstDice == "odd" && resultSecondDice == "even") {
  summResultAlpha = secondDice * 2 - firstDice;
  alert(`You got = ${summResultAlpha} from 1st throw`);
} else {
  summResultAlpha = firstDice - firstDice - (secondDice - secondDice);
  alert(`You got = ${summResultAlpha} from 1st throw`);
}
let isSecondTry = confirm("Will you throw for the second time?");
let summResultAlphaSecondTry = 0;
if (isSecondTry) {
  firstDice = Math.floor(Math.random() * 6 + 1);
  secondDice = Math.floor(Math.random() * 6 + 1);
  alert(`You got ${firstDice} and ${secondDice}`);
  resultFirstDice = firstDice % 2 == 0 ? "even" : "odd";
  resultSecondDice = secondDice % 2 == 0 ? "even" : "odd";
  if (resultFirstDice == "even" && resultSecondDice == "even") {
    summResultAlphaSecondTry = firstDice * 2 + secondDice * 2;
    alert(`You got = ${summResultAlphaSecondTry} from 2nd throw`);
  } else if (resultFirstDice == "even" && resultSecondDice == "odd") {
    summResultAlphaSecondTry = firstDice * 2 - secondDice;
    alert(`You got = ${summResultAlphaSecondTry} from 2nd throw`);
  } else if (resultFirstDice == "odd" && resultSecondDice == "even") {
    summResultAlphaSecondTry = secondDice * 2 - firstDice;
    alert(`You got = ${summResultAlphaSecondTry} from 2nd throw`);
  } else {
    summResultAlphaSecondTry = summResultAlpha - (firstDice + secondDice);
    alert(`You got = ${summResultAlphaSecondTry} from 2nd throw`);
  }
  alert(
    `So, endscore for First player is - ${
      summResultAlpha + summResultAlphaSecondTry
    }!`
  );
} else {
  alert(`So, endscore for First player is - ${summResultAlpha}!`);
}
const endScoreAlpha = parseInt(summResultAlpha + summResultAlphaSecondTry);

alert(`Second player's turn!`);
firstDice = Math.floor(Math.random() * 6 + 1);
secondDice = Math.floor(Math.random() * 6 + 1);
alert(`You got ${firstDice} and ${secondDice}`);
resultFirstDice = firstDice % 2 == 0 ? "even" : "odd";
resultSecondDice = secondDice % 2 == 0 ? "even" : "odd";
let summResultBeta = 0; //alpha - second player
if (resultFirstDice == "even" && resultSecondDice == "even") {
  summResultBeta = firstDice * 2 + secondDice * 2;
  alert(`You got = ${summResultBeta} from 1st throw`);
} else if (resultFirstDice == "even" && resultSecondDice == "odd") {
  summResultBeta = firstDice * 2 - secondDice;
  alert(`You got = ${summResultBeta} from 1st throw`);
} else if (resultFirstDice == "odd" && resultSecondDice == "even") {
  summResultBeta = secondDice * 2 - firstDice;
  alert(`You got = ${summResultBeta} from 1st throw`);
} else {
  summResultBeta = firstDice - firstDice - (secondDice - secondDice);
  alert(`You got = ${summResultBeta} from 1st throw`);
}
isSecondTry = confirm("Will you throw for the second time?");
let summResultBetaSecondTry = 0;
if (isSecondTry) {
  firstDice = Math.floor(Math.random() * 6 + 1);
  secondDice = Math.floor(Math.random() * 6 + 1);
  alert(`You got ${firstDice} and ${secondDice}`);
  resultFirstDice = firstDice % 2 == 0 ? "even" : "odd";
  resultSecondDice = secondDice % 2 == 0 ? "even" : "odd";
  if (resultFirstDice == "even" && resultSecondDice == "even") {
    summResultBetaSecondTry = firstDice * 2 + secondDice * 2;
    alert(`You got = ${summResultBetaSecondTry} from 2nd throw`);
  } else if (resultFirstDice == "even" && resultSecondDice == "odd") {
    summResultBetaSecondTry = firstDice * 2 - secondDice;
    alert(`You got = ${summResultBetaSecondTry} from 2nd throw`);
  } else if (resultFirstDice == "odd" && resultSecondDice == "even") {
    summResultBetaSecondTry = secondDice * 2 - firstDice;
    alert(`You got = ${summResultBetaSecondTry} from 2nd throw`);
  } else {
    summResultBetaSecondTry = summResultBeta - (firstDice + secondDice);
    alert(`You got = ${summResultBetaSecondTry} from 2nd throw`);
  }
  alert(
    `So, endscore for Second player is - ${
      summResultBeta + summResultBetaSecondTry
    }!`
  );
} else {
  alert(`So, endscore for Second player is - ${summResultBeta}!`);
}
const endScoreBeta = summResultBeta + summResultBetaSecondTry;

if (endScoreAlpha > endScoreBeta) {
  alert("First player wins!");
} else if (endScoreAlpha < endScoreBeta) {
  alert("Second player wins!");
} else {
  alert("Draw!");
}
