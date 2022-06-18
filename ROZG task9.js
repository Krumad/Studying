//ROZG

// 5. Комп’ютер випадковим чином генерує число. Вгадати, чи наступне число буде більшим чи меншим. //

const randomizerFirst = Math.floor(Math.random() * 101);
alert("Randomizer, first number =" + randomizerFirst);
const isBigger = !confirm("OK - next number bigger/ CANCEL - smaller");
const randomizerSecond = Math.floor(Math.random() * 101);
alert("Randomizer, second number =" + randomizerSecond);
if (!isBigger && randomizerSecond > randomizerFirst) {
  alert(`Lucky bastard! ${randomizerSecond} > ${randomizerFirst}`);
} else if (isBigger && randomizerSecond < randomizerFirst) {
  alert(`Lucky bastard! ${randomizerSecond} < ${randomizerFirst}`);
} else {
  alert("Not today,son!");
}
