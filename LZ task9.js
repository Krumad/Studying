//LZ task9

const seconds = parseInt(prompt("Second"));
const secondsInHour = 3600;
const hours = Math.floor(seconds / secondsInHour);
const minutes = Math.floor((seconds / 60) % 60);
alert(hours + " hour(s) " + minutes + " minute(s) past");