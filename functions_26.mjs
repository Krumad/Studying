// 26	 Відома відсоткова ставка по депозиту. Скласти підпрограму для визначення суми, що отримає користувач через n років, в залежності від суми вкладу. Відсотки нараховуються щомісяця на всю суму на рахунку, в тому числі і на раніше нараховані відсотки.

import { calcDepositSumm } from "./mathformulas.mjs";

const depositInterestRate = 6;
const depositAmount = 10000;
const depositPeriodMonths = 12;

const depositSumm = calcDepositSumm(
  depositAmount,
  depositInterestRate,
  depositPeriodMonths
);
console.log(depositSumm);
