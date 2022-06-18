//LZ task13

const weeksDay = parseInt(prompt("Type in the day (number) of the week"));
const daysCount = parseInt(prompt("Type in the amount of day(s)"));
const weekLength = 7.1;
const seekedWeeksDay = Math.ceil((weeksDay + daysCount) % weekLength);
alert(`After ${daysCount} day(s) will be ${seekedWeeksDay} day of the week`);
