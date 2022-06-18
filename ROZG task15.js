//ROZG
// // 10. Родина їде на відпочинок автомобілем. З клавіатури вводиться наявна кількість літрів палива, витрати палива на 100 кілометрів та відстань, яку необхідно подолати. Вивести на екран чи потрібно, чи не потрібно буде додатково заправляти автомобіль. //

const fuelAmount = parseInt(prompt("Amount of fuel"));
const fuelCosts = parseInt(prompt("Fuel costs on 100km?"));
const distanceToCovered = parseInt(prompt("The distance to be covered?"));
const distanceToCoveredFuelsNeed = distanceToCovered / fuelCosts;
if (distanceToCoveredFuelsNeed > fuelAmount) {
  alert(`You need to get more fuel`);
} else {
  alert("Its ok");
}
