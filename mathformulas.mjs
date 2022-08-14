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
