/* Задача 9. Вивести на екран
   0
  000
 00000
0000000
   0
  000
 00000
0000000
   0
  000
 00000
0000000
    */

document.write(`<pre>`);
for (let m = 0; m < 3; m++) {
  for (let i = 0, l = 1; i < 4; i++) {
    for (let k = 3; k > i; k--) {
      document.write(" ");
    }
    for (let j = 0; j < i + l; j++) {
      document.write("0");
    }
    document.write("<br>");
    l++;
  }
}
document.write(`</pre>`);
