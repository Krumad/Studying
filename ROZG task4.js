//ROZG
//Задача 2. З клавіатури вводиться назва категорії водія. Вивести на екран назву транспортного засобу, яким він може керувати

const driversLicenseCat = prompt("Enter the category of drivers license", "");
let result;
switch (driversLicenseCat.toLowerCase()) {
  case "a1":
    result = "Mopeds, scooters";
    break;
  case "a":
    result = "Motocycles";
    break;
  case "b1":
    result = "Tricycles, ATVs";
    break;
  case "b":
    result = "Cars up to 3.5 tons";
    break;
  case "c1":
    result = "Trucks";
    break;
  case "c":
    result = "Trucks from 7.5 tons";
    break;
  case "d1":
    result = "Buses up to 16 seats";
    break;
  case "d":
    result = "Buses from 16 seats";
    break;
  case "t":
    result = "Trams, trolleybuses";
    break;
  default:
    result = "Wrong letter, try more";
    break;
}
alert(result);
