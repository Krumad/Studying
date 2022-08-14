// 16	Задано координати вершин трикутника. Визначити чи є він прямокутним, за допомогою підпрограми.  Якщо так – вивести довжину гіпотенузи.

import {
  getTriangleSide,
  getLongestSide,
  getShorterSide,
  getAverageSide,
  showIsRightAngled,
} from "./mathformulas.mjs";

const dot_A_x = 1;
const dot_A_y = 1;
const dot_B_x = 2;
const dot_B_y = 5;
const dot_C_x = 8;
const dot_C_y = 8;

const sideAB = getTriangleSide(dot_A_x, dot_A_y, dot_B_x, dot_B_y);
console.log(sideAB);

const sideBC = getTriangleSide(dot_B_x, dot_B_y, dot_C_x, dot_C_y);
console.log(sideBC);

const sideAC = getTriangleSide(dot_A_x, dot_A_y, dot_C_x, dot_C_y);
console.log(sideAC);

const longestSide = getLongestSide(sideAB, sideAC, sideBC);
console.log(longestSide);

const shorterSide = getShorterSide(sideAB, sideAC, sideBC);
console.log(shorterSide);

const averageSide = getAverageSide(sideAB, sideAC, sideBC);
console.log(averageSide);

const isRightAngled = showIsRightAngled(shorterSide, averageSide, longestSide);
console.log(isRightAngled);

if (isRightAngled) {
  console.log(
    `The triangle is right-angled. Hypotenuse is ${longestSide} cm length`
  );
} else {
  console.log(`The triangle is not right-angled`);
}
