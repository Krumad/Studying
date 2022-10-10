/* 11. Дано числовий масив розмірності N.  Вважати, що його елементи утворюють числову послідовність,  утворити новий масив що містить найдовшу зростаючу підпослідовність. */

const currentArray = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 5, 11, 7, 15];

const riseSubSequence = (array) => {
  let tempArray = [];
  let arrayOfSequences = [];

  let i = 0;
  let firstElement = array[0];
  arrayOfSequences[0] = [firstElement];

  for (let j = i + 1; j < array.length; j++) {
    let lastArrayOfArrayOfSequences =
      arrayOfSequences[arrayOfSequences.length - 1];
    let lastElementOfLastArray =
      lastArrayOfArrayOfSequences[lastArrayOfArrayOfSequences.length - 1];

    if (array[j] > lastElementOfLastArray) {
      tempArray = [...lastArrayOfArrayOfSequences, array[j]];
      arrayOfSequences[arrayOfSequences.length] = tempArray;
    } else {
      for (let k = arrayOfSequences.length - 1; k >= 0; k--) {
        let curAr = arrayOfSequences[k];
        let lastElCurAr = curAr[curAr.length - 1];
        if (lastElCurAr < array[j]) {
          tempArray = [...curAr, array[j]];
          arrayOfSequences[k + 1] = tempArray;
          break;
        }
      }
    }
  }

  return arrayOfSequences[arrayOfSequences.length - 1];
};

console.log(riseSubSequence(currentArray));
