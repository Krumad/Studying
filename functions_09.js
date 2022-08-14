/*Задача 9. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>*/

const myImg = `js/1.jpg`;
const myTitle = `True story about "Glory to Ukraine"`;
const myLink = `https://www.istpravda.com.ua/eng/articles/2018/10/4/153036/`;

const showBanner = (img, title, link) =>
  document.write(
    `<h1 align=center>${title}</h1><a class=btn-bgstroke href=${link}><div align=center><img src=${img} ></div></a>`
  );

showBanner(myImg, myTitle, myLink);
