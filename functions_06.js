/*Задача 6. Створити функції, які переводять:
1)	Сантиметри у дюйми;
2)	Кілограми у фунти;
3)	Кілометри у милі.
*/

const cmPerInch = 2.54;
const getInches = (centimeters) => (centimeters / cmPerInch).toFixed(2);

const kgPerPound = 0.45359237;
const getPounds = (kilograms) => (kilograms / kgPerPound).toFixed(2);

const kmPerMile = 1.609344;
const getMiles = (kilometers) => {
  return (kilometers / kmPerMile).toFixed(2);
};

const centimeters = +prompt(`Enter cm`);
const kilograms = +prompt(`Enter kg`);
const kilometers = +prompt(`Enter km`);

alert(
  `${centimeters} cm to inches = ${getInches(centimeters)} in,
${kilograms} kg to pounds = ${getPounds(kilograms)} lb,
${kilometers} km to miles = ${getMiles(kilometers)} mi`
);
