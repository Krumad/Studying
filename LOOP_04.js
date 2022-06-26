/*    Задача 4. Вивести на екран
00 00 00 00 00 00 00
-- -- -- -- -- -- -- 
\/ \/ \/ \/ \/ \/ \/
00 00 00 00 00 00 00
-- -- -- -- -- -- -- 
\/ \/ \/ \/ \/ \/ \/
00 00 00 00 00 00 00
-- -- -- -- -- -- -- 
\/ \/ \/ \/ \/ \/ \/
   */

document.write(`<pre>`);
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 7; j++) {
    document.write("00 ");
  }
  document.write("<br>");
  for (let k = 0; k < 7; k++) {
    document.write("-- ");
  }
  document.write("<br>");
  for (let l = 0; l < 7; l++) {
    document.write(`\\/ `);
  }
  document.write("<br>");
}
document.write(`</pre>`);
