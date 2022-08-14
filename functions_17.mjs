// 17	Задані координати вершин чотирикутника в порядку обходу за годинниковою стрілкою. Визначити чи він є прямокутником, за допомогою підпрограми. Якщо так  знайти його площу.

import {
  getQuadrangleSquare,
  getSideLength,
  checkIsQuadrangleRight,
} from "./mathformulas.mjs";

const dot_A_x = 1;
const dot_A_y = 3;
const dot_B_x = 2;
const dot_B_y = 3;
const dot_C_x = 3;
const dot_C_y = 4;
const dot_D_x = 2;
const dot_D_y = 4;

const sideAB = getSideLength(dot_A_x, dot_A_y, dot_B_x, dot_B_y);
console.log(sideAB);

const sideBC = getSideLength(dot_B_x, dot_B_y, dot_C_x, dot_C_y);
console.log(sideBC);

const sideCD = getSideLength(dot_C_x, dot_C_y, dot_D_x, dot_D_y);
console.log(sideCD);

const sideDA = getSideLength(dot_D_x, dot_D_y, dot_A_x, dot_A_y);
console.log(sideDA);

const isRightQuadrangle = checkIsQuadrangleRight(
  sideAB,
  sideBC,
  sideCD,
  sideDA
);
console.log(isRightQuadrangle);

if (isRightQuadrangle) {
  const quadranglesSquare = getQuadrangleSquare(sideAB, sideBC);
  console.log(quadranglesSquare);
}
