/*14	Задані координати вершин трикутника. Знайти його периметр та площу, за допомогою підпрограм.
 */

import { getTriangleSide, getHalfPerimeter, getTrianglePerimeter, getTriangleSquare } from "./mathformulas.mjs";

const apex_A_x = 1
const apex_A_y = 0
const apex_B_x = -4
const apex_B_y = 5
const apex_C_x = 8
const apex_C_y = -2

console.log(getTriangleSide(apex_B_x, apex_B_y, apex_C_x, apex_C_y));
const BC = getTriangleSide(apex_B_x, apex_B_y, apex_C_x, apex_C_y);

console.log(getTriangleSide(apex_A_x, apex_A_y, apex_B_x, apex_B_y));
const AB = getTriangleSide(apex_A_x, apex_A_y, apex_B_x, apex_B_y);

console.log(getTriangleSide(apex_A_x, apex_A_y, apex_C_x, apex_C_y));
const AC = getTriangleSide(apex_A_x, apex_A_y, apex_C_x, apex_C_y);

const trianglePerimeter = getTrianglePerimeter(AB, BC, AC);
console.log(trianglePerimeter);

const halfPerimeter = getHalfPerimeter(trianglePerimeter);
console.log(halfPerimeter);

const triangleSquare = getTriangleSquare(AB, BC, AC, halfPerimeter);
console.log(triangleSquare);
