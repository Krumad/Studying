// 20	Задані координати 3 точок. Визначити радіус описаного кола, за допомогою підпрограми.

import {
  getTriangleSide,
  getTriangleSquare,
  getOuterCircleRadius,
  getTrianglePerimeter,
  getHalfPerimeter,
} from "./mathformulas.mjs";

const dot_A_x = 1;
const dot_A_y = 1;
const dot_B_x = 2;
const dot_B_y = 5;
const dot_C_x = 8;
const dot_C_y = 8;

const sideA = getTriangleSide(dot_A_x, dot_A_y, dot_B_x, dot_B_y);
console.log(sideA);

const sideB = getTriangleSide(dot_B_x, dot_B_y, dot_C_x, dot_C_y);
console.log(sideB);

const sideC = getTriangleSide(dot_A_x, dot_A_y, dot_C_x, dot_C_y);
console.log(sideC);

const trianglePerimeter = getTrianglePerimeter(sideA, sideB, sideC);
console.log(trianglePerimeter);

const halfPerimeter = getHalfPerimeter(trianglePerimeter);
console.log(halfPerimeter);

const triangleSquare = getTriangleSquare(sideA, sideB, sideC, halfPerimeter);
console.log(triangleSquare);

const circleRadius = getOuterCircleRadius(sideA, sideB, sideC, triangleSquare);
console.log(circleRadius);
