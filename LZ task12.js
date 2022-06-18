//LZ task12

const numberOfDays = parseInt(prompt("Type in number of days"));
const weekLength = 7;
const numberOfFullWeeks = Math.floor(numberOfDays / weekLength);
alert("This is " + numberOfFullWeeks + " full week(s)");
