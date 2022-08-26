// 25	Розв’язати квадратне рівняння, задане коефіцієнтами, за допомогою підпрограми.  Знаходження дискримінанта оформити як окрему підпрограму.

import { getDiscriminator, getQuadraticEquation } from "./mathformulas.mjs";

const a = 2;
const b = 66;
const c = 2;

const discriminator = getDiscriminator(a, b, c);
console.log(discriminator);

getQuadraticEquation(discriminator, a, b);
