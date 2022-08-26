// 22	Створити підпрограми для знаходження n-го члена та суми перших n членів арифметичної прогресії, за відомими першим членом та різницею

import { getMembersSumm, get_N_member } from "./mathformulas.mjs";

const stepProgression = 3;
const memberOne = 3;
const searchedMember = 5;

const memberFive = get_N_member(stepProgression, memberOne, searchedMember);
console.log(memberFive);

const membersSumm = getMembersSumm(memberOne, memberFive, searchedMember);
console.log(membersSumm);
