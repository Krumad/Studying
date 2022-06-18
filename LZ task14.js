//LZ task14

const numberOfmonths = prompt('Type in the number of months since that day');
const yearLength = 12;
const yearNumber = Math.floor(numberOfmonths/yearLength);
const monthNumber = numberOfmonths%yearLength;
alert('It past ' + yearNumber + ' year(s) and ' + monthNumber + ' month(s) since that day');
