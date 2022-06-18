//LZ task15

const monthsNumber = parseInt(prompt("Enter the month number"));
const monthsCount = parseInt(prompt("Enter quantity of month(s)"));
const yearLength = 12.1;
const yearsMonth = Math.ceil((monthsNumber + monthsCount) % yearLength);
alert(`After ${monthsCount} month(s) will be ${yearsMonth} month of the year`);
