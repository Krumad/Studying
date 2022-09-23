/* Задача 1. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
8)	у першій половині року;
9)	у другій половині року;
10)	за літо;
11)	за ІІ квартал */

/* Задача 2. Дано послідовність оцінок учня. Підрахувати кількість:
4)	двійок
5)	кількість хороших оцінок (добре, відмінно);
6)	кількість оцінок, які нижче середнього.
 */

let payments = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400];
console.log(`length = ${payments.length}`);

let summYearFirstHalf = 0;

let summYearSecondHalf = 0;

let summSummer = 0;

let summSecondQuarter = 0;

for (let i = 0; i < payments.length; i++) {
    if (i < 6) {
        summYearFirstHalf += payments[i];  
    };
    if (i > 5) {
        summYearSecondHalf += payments[i];
    };
    if (i >= 5 && i <= 7) {
        summSummer += payments[i];
    };
    if (i >= 3 && i <= 5) {
        summSecondQuarter += payments[i];
    };
};
console.log(`The summary of first half of the year = ${summYearFirstHalf};
The summary of second half of the year = ${summYearSecondHalf};
The summary for summer  = ${summSummer};
The summary for second quarter  = ${summSecondQuarter}`);