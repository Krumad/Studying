/*15	Задані координати 3 точок. Визначити чи лежать вони на одній прямій, за допомогою підпрограми.
 */

import { showIsDotsOnOneStraight } from "./mathformulas.mjs";

const dot_A_x = 4;
const dot_A_y = 2;
const dot_B_x = -4;
const dot_B_y = 2;
const dot_C_x = 1;
const dot_C_y = 6;

console.log(
  showIsDotsOnOneStraight(dot_A_x, dot_A_y, dot_B_x, dot_B_y, dot_C_x, dot_C_y)
);
