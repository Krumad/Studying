// 24	Створити підпрограму для знаходження суми нескінченної спадної геометричної прогресії, за відомими першим членом та знаменником. Перевірку чи є задана геометрична прогресія спадною оформити як окрему підпрограму.

import {
  getGeomProgressionMembersSummary,
  isDecreasingGeomProgression,
} from "./mathformulas.mjs";

const progressionDenominator = -2;
const memberOne = 2;

const isDecreasingProgression = isDecreasingGeomProgression(
  progressionDenominator
);
console.log(isDecreasingProgression);

const geomProgressionMembersSummary = getGeomProgressionMembersSummary(
  progressionDenominator,
  memberOne
);
console.log(geomProgressionMembersSummary);
