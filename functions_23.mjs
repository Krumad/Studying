// 23	Створити підпрограми для знаходження n-го члена та суми суми перших n членів геометричної прогресії, за відомими першим членом та знаменником

import { getMembersSummary, getGeomProgrN_Member } from "./mathformulas.mjs";

const progressionDenominator = 2;
const memberOne = 2;
const searchedMember = 5;

const memberFive = getGeomProgrN_Member(
  progressionDenominator,
  memberOne,
  searchedMember
);
console.log(memberFive);

const membersSumm = getMembersSummary(
  progressionDenominator,
  memberOne,
  searchedMember
);
console.log(membersSumm);
