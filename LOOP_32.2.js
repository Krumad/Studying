/*32. Тир. На полі з 10 клітинок розміщують зайця. За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку. З клавіатури вводиться позиція пострілу. Гра продовжується поки  у користувача не закінчаться патрони (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.*/

alert(
  `Hello, young hunter! Your family starving. You must find some food in this land!`
);

let ammoAmount = +prompt(`So you took so many bullets with you =>`) || 1;
let harePosX = Math.floor(Math.random() * fieldsLength) + 1;
let shotPosX;

do {
  if (ammoAmount === 0) {
    alert(`Oh,man! You condemned your loved ones to terrible suffering...`);
    break;
  }

  do {
    shotPosX =
      +prompt(`You look into the scope and determine the coordinates:`) || 1;
  } while (shotPosX > fieldsLength || shotPosX < 0);

  ammoAmount--;

  if (shotPosX === harePosX) {
    alert(`Bulls eye! You saved your relatives.`);
    document.write(`</table>`);
    document.getElementById(`${shotPosX}`).style.backgroundColor = "red";
    break;
  } else {
    alert(`Well, you have ${ammoAmount} rounds left. You should try better!`);
    document.getElementById(`${shotPosX}`).style.backgroundColor = "darkgrey";
    harePosX += -3 + Math.round(Math.random() * (3 - -3));

    if (harePosX > fieldsLength) {
      harePosX = harePosX % fieldsLength;
    } else if (harePosX <= 0) {
      harePosX += fieldsLength;
    }
  }
} while (shotPosX !== harePosX);
