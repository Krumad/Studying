// LZ task3

const pricePotato = parseFloat(prompt("Enter the price of the potato"));
const quantityPotato = parseFloat(prompt("Quantity of potatoes"));
let valuePotato = (pricePotato * quantityPotato).toFixed(2);
alert("Price for potatoes = " + valuePotato + " uah");
const priceTomato = parseFloat(prompt("Enter the price of the tomato"));
const quantityTomato = parseFloat(prompt("Quantity of tomatoes"));
let valueTomato = (priceTomato * quantityTomato).toFixed(2);
alert("Price for tomatoes = " + valueTomato + " uah");
valuePotato = +valuePotato;
valueTomato = +valueTomato;
const totalSummary = valuePotato + valueTomato;
alert("Summary = " + totalSummary + " uah");
