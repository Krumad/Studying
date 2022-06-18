// LZ task 2

let salary = parseFloat(prompt("The size of a salary"));
let subsistLevel = parseFloat(prompt("The size of the subsistence level"));
if (salary < subsistLevel) {
  alert(
    "Something goes wrong! Please, be attentive while typing your salary/SSL."
  );
  salary = parseFloat(prompt("The size of a salary"));
  subsistLevel = parseFloat(prompt("The size of the subsistence level"));
}
const socialPayment = subsistLevel - salary;
alert("The size of social assistance = " + socialPayment.toFixed(2) + " uah");
