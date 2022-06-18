//LZ task7

const number = prompt("Type in number");
const integer = Math.floor(number);
const float = (number - integer).toFixed(3);
alert("Integer - " + integer);
alert("Float = " + float);