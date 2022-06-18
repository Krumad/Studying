//ROZG
//  9. У двох дітей є цукерки трьох типів «Червоний мак», «Ліщина», «Білочка» (кількість кожного виду цукерок у кожної дитини вводиться з клавіатури). Вивести на екран одне із повідомлень:
// 1)у однієї із дітей кожного типу цукерок більше;
// 2)у однієї із дітей двох типів цукерок більше;
// 3)кількість кожного з видів цукерок однакова.
// 4)інше.

const lishynaAmountFirstChild = parseInt(
  prompt(`First child's "Lishyna", amount`)
);
const bilochkaAmountFirstChild = parseInt(
  prompt(`First child's "Bilochka", amount`)
);
const chervonyjMakAmountFirstChild = parseInt(
  prompt(`First child's "Chervonyj mak", amount`)
);
const lishynaAmountSecondChild = parseInt(
  prompt(`Second child's "Lishyna", amount`)
);
const bilochkaAmountSecondChild = parseInt(
  prompt(`Second child's "Bilochka", amount`)
);
const chervonyjMakAmountSecondChild = parseInt(
  prompt(`Second child's "Chervonyj mak", amount`)
);
const moreAllCandiesTypeFirstChild =
  lishynaAmountFirstChild > lishynaAmountSecondChild &&
  bilochkaAmountFirstChild > bilochkaAmountSecondChild &&
  chervonyjMakAmountFirstChild > chervonyjMakAmountSecondChild;
const moreAllCandiesTypeSecondChild =
  lishynaAmountFirstChild < lishynaAmountSecondChild &&
  bilochkaAmountFirstChild < bilochkaAmountSecondChild &&
  chervonyjMakAmountFirstChild < chervonyjMakAmountSecondChild;
const moreTwoCandiesTypeFirstChild =
  (lishynaAmountFirstChild > lishynaAmountSecondChild &&
    bilochkaAmountFirstChild > bilochkaAmountSecondChild) ||
  (lishynaAmountFirstChild > lishynaAmountSecondChild &&
    chervonyjMakAmountFirstChild > chervonyjMakAmountSecondChild) ||
  (chervonyjMakAmountFirstChild > chervonyjMakAmountSecondChild &&
    bilochkaAmountFirstChild > bilochkaAmountSecondChild);
const moreTwoCandiesTypeSecondChild =
  (lishynaAmountFirstChild < lishynaAmountSecondChild &&
    bilochkaAmountFirstChild < bilochkaAmountSecondChild) ||
  (lishynaAmountFirstChild < lishynaAmountSecondChild &&
    chervonyjMakAmountFirstChild < chervonyjMakAmountSecondChild) ||
  (chervonyjMakAmountFirstChild < chervonyjMakAmountSecondChild &&
    bilochkaAmountFirstChild < bilochkaAmountSecondChild);
const equalAllCandiesType =
  lishynaAmountFirstChild == lishynaAmountSecondChild &&
  bilochkaAmountFirstChild == bilochkaAmountSecondChild &&
  chervonyjMakAmountFirstChild == chervonyjMakAmountSecondChild;
if (moreAllCandiesTypeFirstChild || moreAllCandiesTypeSecondChild) {
  alert("One of the child has more of each kind");
} else if (moreTwoCandiesTypeFirstChild || moreTwoCandiesTypeSecondChild) {
  alert("One of the child has more of 2 kind");
} else if (equalAllCandiesType) {
  alert("All kind of candies are equal");
} else {
  alert("Something else");
}
