/* 16.	Дано вік 5 працівників. Визначити скільки серед них є пенсіонерів.
 */

const employeeAge = [55, 45, 66, 68, 40];

const retirementAge = 65;

let counter = 0;

for (let i = 0; i < employeeAge.length; i++) {
  if (employeeAge[i] > retirementAge) {
    counter++;
  }
}
console.log(`There are ${counter} pensioners`);
