/*34.Спробуйте модифікувати попередню гру для випадку, коли танк також може стріляти по вашій гарматі (ваша гармата також знаходиться на цьому ж полі).*/

alert(
  `Hello, private! Your task is to destroy enemy tank. Pick up those Javeline.`
);

let ammoAmount = +prompt(`So you took so many javeline ammo with you => `);
let tankPosX = Math.floor(Math.random() * fieldsLength) + 1;
let tanksShot;
let ownPosition;
do {
  ownPosition =
    +prompt(`Our position will be here (set from 1 to ${fieldsLength}):`) || 1;
} while (ownPosition === tankPosX);
let shotPosX;
let tanksHP = 100;
const shotDamage = 30;

do {
  if (ammoAmount === 0) {
    alert(
      `What a disaster, private! You condemned your brothers in arms to death.`
    );
    break;
  }

  do {
    shotPosX =
      +prompt(`You look into the scope and determine the coordinates:`) || 1;
  } while (shotPosX > fieldsLength || shotPosX < 0);

  ammoAmount--;

  if (shotPosX === tankPosX) {
    alert(
      `Nice, private! You damaged that piece of communistic shit! Go on. You have ${ammoAmount} rounds of Javeline left.`
    );
    tanksHP -= shotDamage;
    document.getElementById(`${shotPosX}`).style.backgroundColor = "red";
  } else {
    alert(
      `Well, you have ${ammoAmount} rounds of Javeline left. You should try better!`
    );
    document.getElementById(`${shotPosX}`).style.backgroundColor = "black";
  }

  tanksShot = Math.floor(Math.random() * fieldsLength) + 1;
  if (tanksShot === ownPosition) {
    alert(`Oh, boy... That tank have hit in us!`);
    break;
  } else alert(`Piece of shit! He trying to hit us! Missed!`);

  if (tanksHP <= 0) {
    alert(`Bulls eye! What a nice view of fireworks.`);
    document.write(`</table>`);
    document.getElementById(`${shotPosX}`).style.backgroundColor = "orange";
    break;
  } else {
    tankPosX += -1 + Math.round(Math.random() * 2);

    if (tankPosX > fieldsLength) {
      tankPosX = tankPosX % fieldsLength;
    } else if (tankPosX <= 0) {
      tankPosX = fieldsLength;
    }
  }
} while (true);
