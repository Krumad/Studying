//LZ task5

const TAX = 0.2;
const SALARY_AMOUNT = parseFloat(prompt("Monthly salary"));
const SALARY_NET = (SALARY_AMOUNT - SALARY_AMOUNT * TAX).toFixed(2);
alert("Your net salary after tax is: " + SALARY_NET);
