//LZ task4

let age = parseInt(prompt("What is the age of the child"));
const KINDERGARDEN_START = 2;
const SCHOOL_START = 6;
const SCHOOL_END = 17;
const HIGHSCHOOL_START = 17;
const HIGHSCHOOL_END = 22;
alert("In " + (KINDERGARDEN_START - age) + " year(s) - to kindergarden");
alert("In " + (SCHOOL_START - age) + " year(s) - to school");
alert("In " + (SCHOOL_END - age) + " year(s) - finish school");
alert("In " + (HIGHSCHOOL_START - age) + " year(s) - to high school");
alert("In " + (HIGHSCHOOL_END - age) + " year(s) - finish high school");
