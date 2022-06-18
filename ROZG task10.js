//ROZG
// 5.1 .Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби//

const randomizer = Math.floor(Math.random() * 5) + 1;
let guessTry = parseInt(prompt("First try(1-5)"));
console.log("random", randomizer, "first", guessTry);
if (guessTry != randomizer) {
  guessTry = parseInt(prompt("Second try(1-5)"));
  if (guessTry === randomizer) {
    alert("Finally!");
  } else {
    alert("Another time...");
  }
} else {
  alert(`Bull's eye!`);
}
