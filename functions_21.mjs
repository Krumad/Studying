// 21	Задані координати точки на поверхні і центра кулі. Знайти її об’єм і площу поверхні, за допомогою підпрограм.

import {
  getSphereRadius,
  getSphereSquare,
  getSphereVolume,
} from "./mathformulas.mjs";

const dot_A_x = 3;
const dot_A_y = 3;
const dot_A_z = 0;
const dot_center_x = 4;
const dot_center_y = -1;
const dot_center_z = 12;

const sphereRadius = getSphereRadius(
  dot_A_x,
  dot_A_y,
  dot_A_z,
  dot_center_x,
  dot_center_y,
  dot_center_z
);
console.log(sphereRadius);

const sphereVolume = getSphereVolume(sphereRadius);
console.log(sphereVolume);

const sphereSquare = getSphereSquare(sphereRadius);
console.log(sphereSquare);

console.log(
  `We got: Sphere's radius = ${sphereRadius} cm, square = ${sphereSquare} cm2, volume = ${sphereVolume} cm3.`
);
