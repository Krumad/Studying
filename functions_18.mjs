// 18	Задані координати вершин чотирикутника в порядку обходу за годинниковою стрілкою Знайти координати точки перетину його діагоналей, за допомогою підпрограми.

import { getDiagonalIntersectionPointDot } from "./mathformulas.mjs";

const dot_A_x = 1;
const dot_A_y = 3;
const dot_B_x = 2;
const dot_B_y = 3;
const dot_C_x = 3;
const dot_C_y = 4;
const dot_D_x = 2;
const dot_D_y = 4;

const diagonalIntersectionPointDot_X = getDiagonalIntersectionPointDot(
  dot_A_x,
  dot_C_x
);
const diagonalIntersectionPointDot_Y = getDiagonalIntersectionPointDot(
  dot_A_y,
  dot_C_y
);
console.log(
  `The intersection's coordinates of the diagonales is (${diagonalIntersectionPointDot_X};${diagonalIntersectionPointDot_Y})`
);
