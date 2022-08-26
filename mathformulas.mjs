// 26	 Відома відсоткова ставка по депозиту. Скласти підпрограму для визначення суми, що отримає користувач через n років, в залежності від суми вкладу. Відсотки нараховуються щомісяця на всю суму на рахунку, в тому числі і на раніше нараховані відсотки.

export const calcDepositSumm = (
  depositAmount,
  depositRate,
  rateCalculationPeriodsNumber
) => {
  const monthlyRate = depositRate / 12;
  for (let i = 0; i < rateCalculationPeriodsNumber; i++) {
    depositAmount += (depositAmount * monthlyRate) / 100;
  }
  return parseFloat(depositAmount.toFixed(2));
};

// 25	Розв’язати квадратне рівняння, задане коефіцієнтами, за допомогою підпрограми.  Знаходження дискримінанта оформити як окрему підпрограму.

export const getDiscriminator = (a, b, c) => Math.pow(b, 2) - 4 * a * c;

export const getQuadraticEquation = (discriminator, a, b) => {
  if (discriminator < 0) {
    return `The equation has no real roots`;
  } else if (discriminator === 0) {
    let firstX = -b - (Math.sqrt(discriminator) / 2) * a;
    let secondX = firstX;
    console.log(firstX, secondX);
  } else {
    let firstX = -b - (Math.sqrt(discriminator) / 2) * a;
    let secondX = -b + (Math.sqrt(discriminator) / 2) * a;
    console.log(firstX, secondX);
  }
};

// 24	Створити підпрограму для знаходження суми нескінченної спадної геометричної прогресії, за відомими першим членом та знаменником. Перевірку чи є задана геометрична прогресія спадною оформити як окрему підпрограму.

export const isDecreasingGeomProgression = (progressionDenominator) =>
  progressionDenominator < 0;

export const getGeomProgressionMembersSummary = (
  progressionDenominator,
  firstMember
) => {
  let summary = firstMember / (progressionDenominator - 1);
  return parseFloat(summary.toFixed(2));
};

// 23	Створити підпрограми для знаходження n-го члена та суми суми перших n членів геометричної прогресії, за відомими першим членом та знаменником

export const getGeomProgrN_Member = (
  progressionDenominator,
  firstMember,
  searchedMember
) => firstMember * Math.pow(progressionDenominator, searchedMember - 1);
export const getMembersSummary = (
  progressionDenominator,
  firstMember,
  searchedMember
) =>
  (firstMember * (Math.pow(progressionDenominator, searchedMember) - 1)) /
  (progressionDenominator - 1);

// 22	Створити підпрограми для знаходження n-го члена та суми перших n членів арифметичної прогресії, за відомими першим членом та різницею

export const get_N_member = (progressionStep, firstMember, searchedMember) =>
  firstMember + progressionStep * (searchedMember - 1);
export const getMembersSumm = (firstMember, nMember, searchedMember) =>
  ((firstMember + nMember) * searchedMember) / 2;

// 21	Задані координати точки на поверхні і центра кулі. Знайти її об’єм і площу поверхні, за допомогою підпрограм.

export const getSphereRadius = (x1, y1, z1, x2, y2, z2) => {
  let radius = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
  );
  return parseFloat(radius.toFixed(2));
};

export const getSphereVolume = (radius) => {
  const Pi = 3.14;
  let volume = (4 / 3) * Pi * Math.pow(radius, 3);
  return parseFloat(volume.toFixed(2));
};

export const getSphereSquare = (radius) => {
  const Pi = 3.14;
  let square = 4 * Pi * radius * 2;
  return parseFloat(square.toFixed(2));
};

// 20	Задані координати 3 точок. Визначити радіус описаного кола, за допомогою підпрограми.

export const getOuterCircleRadius = (a, b, c, S) => ((a * b * c) / 4) * S;

// 18	Задані координати вершин чотирикутника в порядку обходу за годинниковою стрілкою Знайти координати точки перетину його діагоналей, за допомогою підпрограми.

export const getDiagonalIntersectionPointDot = (x1, x2) => (x1 + x2) / 2;

// 17	Задані координати вершин чотирикутника в порядку обходу за годинниковою стрілкою. Визначити чи він є прямокутником, за допомогою підпрограми. Якщо так  знайти його площу.

export const getSideLength = (x1, y1, x2, y2) => {
  let side = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return parseFloat(side.toFixed(2));
};

export const checkIsQuadrangleRight = (a, b, c, d) => a === c && b === d;

export const getQuadrangleSquare = (a, b) => a * b;

// 16	Задано координати вершин трикутника. Визначити чи є він прямокутним, за допомогою підпрограми.  Якщо так – вивести довжину гіпотенузи.

export const getLongestSide = (a, b, c) => {
  let longestSide = a;
  if (b > longestSide) longestSide = b;
  if (c > longestSide) longestSide = c;
  return longestSide;
};

export const getShorterSide = (a, b, c) => {
  let shorterSide = a;
  if (b < shorterSide) shorterSide = b;
  if (c < shorterSide) shorterSide = c;
  return shorterSide;
};

export const getAverageSide = (a, b, c) => {
  if (a < b) {
    if (a > c) {
      return a;
    }
    if (b < c) {
      return b;
    } else {
      return c;
    }
  } else {
    if (a < c) {
      return a;
    } else {
      if (b > c) {
        return b;
      }
      return c;
    }
  }
};

export const showIsRightAngled = (a, b, c) =>
  Math.sqrt(c) === Math.sqrt(a) + Math.sqrt(b);

// 14

export const getTriangleSide = (x1, y1, x2, y2) => {
  let side = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return parseFloat(side.toFixed(2));
};

export const getTrianglePerimeter = (a, b, c) => {
  let perimeter = a + b + c;
  return parseFloat(perimeter.toFixed(2));
};

export const getHalfPerimeter = (trianglePerimeter) => trianglePerimeter / 2;

export const getTriangleSquare = (a, b, c, p) =>
  (p * (p - a) * (p - b) * (p - c)).toFixed(2);

/*15	Задані координати 3 точок. Визначити чи лежать вони на одній прямій, за допомогою підпрограми.
 */

export const showIsDotsOnOneStraight = (x1, y1, x2, y2, x3, y3) => {
  let dotsPosition = (1 / 2) * ((x1 - x3) * (y2 - y3) - (x2 - x3) * (y1 - y3));
  let result = dotsPosition === 0 ? true : false;
  return result;
};
