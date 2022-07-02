/*  20. На екрані виводиться меню: 
1. Сказати «Привіт». 
2. Сказати «Зачекай». 
3. Сказати «До побачення». 
4. Вихід.
Шляхом вибору пунктів меню виводити відповідні повідомлення, поки не буде вибрано пункт номер 4.
 */
let menu;
do {
  menu = +prompt(
    `Choose what to say: \n 1 'Hi!' \n 2 'Wait a minute.' \n 3 'Cya!' \n 4 GTFO`
  );
  console.log(menu);
  switch (menu) {
    case 1:
      document.write(`<i>Hi!</i><br><HR>`);
      break;
    case 2:
      document.write(`<i>Wait a minute.</i><br><HR>`);
      break;
    case 3:
      document.write(`<i>Cya!</i><br><HR>`);
      break;
    case 4:
      document.write(`<i>GTFO</i><br><HR>`);
  }
} while (menu !== 4);
