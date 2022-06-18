//LZ task11

const numberOfKopecks = parseInt(prompt("Type in number of kopecks"));
const nominalOfkopeck = parseInt(prompt("Type in nominal of kopeck"));
const valueOfKopecks = numberOfKopecks * nominalOfkopeck;
const hryvniasExpression = Math.floor(valueOfKopecks / 100);
const kopecksExpression = valueOfKopecks % 100;
alert(
  "That number of kopecks expressed in " +
    hryvniasExpression +
    " UAH and " +
    kopecksExpression +
    " kopecks"
);
