//ROZG
// 3. На роботу компаніє приймає працівників від 32 до 45 років. З клавіатури вводиться вік претендента. З’ясувати, чи може він бути прийнятим на роботу.//

const age = parseInt(prompt("Your age is"));
if (age >= 32 && age <= 45) {
  alert("Proceed to next procedure");
} else {
  alert("Not proceed");
}
