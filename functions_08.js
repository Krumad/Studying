/*Задача 8. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)*/

const imgOne = "js/1.png";
const imgTwo = "js/2.png";
const imgThree = "js/3.png";
const imgFour = "js/4.png";

const showImage = (img1, img2, img3, img4) => {
  const randomizer = Math.floor(Math.random() * 4) + 1;
  let pathToImg;
  switch (randomizer) {
    case 1:
      pathToImg = `${img1}`;
      break;
    case 2:
      pathToImg = `${img2}`;
      break;
    case 3:
      pathToImg = `${img3}`;
      break;
    case 4:
      pathToImg = `${img4}`;
      break;
  }
  return document.write(`<img src = ${pathToImg}>`);
};

showImage(imgOne, imgTwo, imgThree, imgFour);
