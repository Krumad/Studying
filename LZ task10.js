//LZ task10

const amountOfKopecks = parseInt(prompt("Kopecks"));
const hryvnia = Math.floor(amountOfKopecks / 100);
const kopecks = amountOfKopecks % 100;
alert(hryvnia + " UAH " + kopecks + " kopeck(s)");