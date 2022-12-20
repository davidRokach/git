(function () {
  //#region 1.1. Return the First Element in an Array:

  const getFirstValue = [1, 2, 3, 4, 5, 6];
  const FirstValuefun = function (array) {
    return array[0];
  };
  const FirstValue = FirstValuefun(getFirstValue);
  console.log(`First Element in an Array: ${FirstValue}`);
  //#endregion

  //#region 1.2. Pair Management
  function makePairFUN(FirstValue, secondValue) {
    return [FirstValue, secondValue];
  }
  arrayTMakePair = makePairFUN(25, 50);
  console.log(`Pair Management: ${arrayTMakePair}`);
  //#endregion

  //#region 1.3. Drop the First Elements of an Array
  function drop(array, indexNum) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
      if (index >= indexNum) {
        newArray[index - indexNum] = array[index];
      }
    }

    return newArray;
  }
  const dropedArray = drop([5, 8, 9], 1);
  console.log(`Droped Array: ${dropedArray}`);
  //#endregion

  //#region 1.4. Reverse an Array
  function ReverseArrayfun(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
      newArray[index] = array[array.length - (index + 1)];
    }
    return newArray;
  }
  const ReverseArray = ReverseArrayfun([1, 2, 3, 4]);
  console.log(`Reverse Array: ${ReverseArray}`);
  //#endregion

  //#region 1.5. Find the Smallest and Biggest Numbers
  function minMaxfun(array) {
    let max = -Infinity;
    let min = Infinity;
    for (const number of array) {
      if (number > max) {
        max = number;
      }
      if (number < min) {
        min = number;
      }
    }

    return `${min} , ${max}`;
    //   can work too
    //   return (`${Math.max(...array)}, ${Math.min(...array)}`);
  }
  const minMax = minMaxfun([1, 2, 3, 4]);
  console.log(`Smallest and Biggest Numbers are: ${minMax}`);
  //#endregion

  //#region  1.6. Find the Index (Part 1)
  function searchFun(array, number) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] === number) {
        let resulte = index;
        return resulte;
      } else if (!array.includes(number)) {
        let resulte = -1;
        return resulte;
      }
    }
  }
  const search = searchFun([9, 8, 3], 3);
  console.log(`Find the Index: ${search}`);
  //#endregion

  //#region  1.7. Check if One Array can be Nested in Another
  function canNestFun(array1, array2) {
    if (
      Math.min(...array1) > Math.min(...array2) &&
      Math.max(...array1) < Math.max(...array2)
    ) {
      return true;
    } else {
      return false;
    }
  }
  const canNest = canNestFun([9, 9, 8], [8, 9]);
  console.log(`Array can be Nested in Another?: ${canNest}`);
  //#endregion

  //#region 2.1. How Much is True?
  function countTrueFun(array) {
    let resulte = 0;
    for (let index = 0; index < array.length; index++) {
      if (array[index] === true) {
        resulte++;
      }
    }
    return resulte;
  }
  const countTrue = countTrueFun([true, false, false, true, false]);
  console.log(`How Much is True?: ${countTrue}`);
  //#endregion

  //#region 2.2. Converting Objects to Arrays
  function toArrayFun(object) {
    let array = [[], []];

    for (let index = 0; index < Object.keys(object).length - 1; index++) {
      array = [
        [Object.keys(object)[index], object[Object.keys(object)[index]]],
        [
          Object.keys(object)[index + 1],
          object[Object.keys(object)[index + 1]],
        ],
      ];
    }
    return array;
  }
  const toArray = toArrayFun({ a: 1, b: 2 });
  console.log(toArray);
  //#endregion

  //#region 2.3. Convenience Store

  // 4 quarters = 1$ (1 quarter = 25 cents / $0.25)
  // 10 dimes = 1$ (1 dime = 10 cents / $0.10)
  // 20 nickels = 1$ (1 nickel = 5 cents / $0.05)
  // 100 pennies = 1$ (1 penny = 1 cent / $0.01)

  function changeEnoughFun(array, price) {
    const quarterD = array[0] * 0.25;
    const dimesD = array[1] * 0.1;
    const nickelsD = array[2] * 0.05;
    const pennies = array[3] * 0.01;
    const total = quarterD + dimesD + nickelsD + pennies;
    if (total > price) {
      return true;
    } else {
      return false;
    }
  }
  const changeEnough = changeEnoughFun([0, 0, 20, 5], 0.75);
  console.log(`Convenience Store
: ${changeEnough}`);
  //#endregion

  //#region 2.4. Array of Multiples
  function arrayOfMultiplesFun(num, length23) {
    let array = [];
    for (let index = 1; index <= length23; index++) {
      array[index - 1] = num * index;
    }
    return array;
  }
  const arrayOfMultiples = arrayOfMultiplesFun(7, 5);
  console.log(arrayOfMultiples);
  //#endregion

  //#region
  function colorsFun(array, value) {
    let newArray = [];
    let i = 0;
    while (true) {
      const idx = array.indexOf(value, i);
      if (idx === -1) break;
      newArray.push(idx);
      i = idx + 1;
    }
    return newArray;
  }
  const colors = colorsFun(
    [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "green",
      "yellow",
      "green",
    ],
    "yellow"
  );
  console.log(colors);
  //#endregion

  // ********************************************************************

  //#region medium/easy:

  //#region 1. Index Multiplier
  function indexMultiplier(array) {
    const sum = array.reduce((acc, value) => {
      let index = array.indexOf(value);
      return acc + value * index;
    }, 0);

    return sum;
  }
  console.log(indexMultiplier([1, 2, 3, 4, 5]));
  //#endregion

  //#region 2. Finding Nemo
  function findNemo(string) {
    const array = string.split(" ");
    let resultNemo = "";
    if (array.includes("Nemo")) {
      return (resultNemo = `I found Nemo at ${array.indexOf("Nemo") + 1} !`);
    } else {
      return (resultNemo = `I can't find Nemo :(`);
    }
  }
  console.log(findNemo("I am finding Nemo !"));
  //#endregion

  //#region 3. Clone an Array
  function clone(arr) {
    const newArray = [arr];
    const cloneArray = arr.concat(newArray);
    return cloneArray;
  }
  console.log(clone([1, 1]));
  //#endregion

  //   #region 4. Compact
  function compact(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i] === false ||
        arr[i] === null ||
        arr[i] === 0 ||
        arr[i] === "" ||
        arr[i] === undefined ||
        arr[i] === NaN
      ) {
        arr.splice(arr.indexOf(arr[i]), 1);
      }
    }
    return arr;
  }
  console.log(compact([0, 1, false, 2, "", 3]));
  //#endregion

  //#region 5 Find the Second Largest Number
  function secondLargest(arr) {
    let num = 0;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > num) {
        num = arr[index];
      }
    }
    arr.splice(arr.indexOf(num), 1);
    let resultNum = 0;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > resultNum) {
        resultNum = arr[index];
      }
    }
    return resultNum;
  }
  console.log(secondLargest([10, 40, 30, 20, 50]));
  //#endregion

  //#endregion

  //#region hard:

  //#region 1 Currying Functions
  function multiply(arr) {
    return function (b) {
      const newArray = arr.map((value) => value * b);
      return newArray;
    };
  }
  console.log(multiply([10, 40, 30, 20, 50])(2));
  //#endregion

  //#region 2 Sort the Unsortable

  function min(arr) {
    if (arr.length === 1) return arr[0];
    let min = arr[0];
    for (let m of arr) {
      const isNumM = typeof m == "number";
      const isNumMin = typeof min == "number";
      if (isNumM && isNumMin) min = m <= min ? m : min;
      if (!isNumM && isNumMin) min = m[0] <= min ? m : min;
      if (isNumM && !isNumMin) min = m <= min[0] ? m : min;
      if (!isNumM && !isNumMin) min = m[0] <= min[0] ? m : min;
    }
    return min;
  }

  function sortIt(arr) {
    // return min;
    const length = arr.length;
    let newArr = [];
    for (let i = 0; i < length; i++) {
      let minV = min(arr);
      let index = arr.indexOf(minV);
      newArr.push(minV);
      arr.splice(index, 1);
    }

    return newArr;
  }
  const arraySortIt = [4, [1], 3];
  console.log(sortIt(arraySortIt));
  //#endregion

  //#region 3. fix the Error: Flattening an Array
  function flatten(arr) {
    const resulte = arr.reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);

    return resulte;
  }
  console.log(
    flatten([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  );
  //#endregion

  //#region 4. class exsersises in recurcive
  function printReverse(arr, index = 0, acc = 0, newArr = []) {
    if (index === arr.length + 1) {
      newArr.splice(0, 1);
      return newArr;
    }
    newArr.push(acc);
    return printReverse(arr, index + 1, arr[arr.length - (index + 1)], newArr);
  }
  console.log(printReverse([1, 2, 3, 4]));
  // ************
  function isUniform(arr, index = 0, acc = 0) {
    if (index === arr.length - 1) {
      return true;
    }
    if (acc !== arr[index + 1] && index !== 0) {
      return false;
    }
    return isUniform(arr, index + 1, arr[index]);
  }
  console.log(isUniform(["a", "b", "b"]));
  // ************
  function sumArray(arr, index = 0, acc = 0) {
    if (index === arr.length) {
      return acc;
    }
    return sumArray(arr, index + 1, acc + arr[index]);
  }
  console.log(sumArray([1, 2, 3, 4]));
  // ************
  function max(arr, index = 0, acc = 0, maxCheck = 0) {
    if (index === arr.length + 1) {
      return maxCheck;
    }
    if (maxCheck < acc) {
      maxCheck = acc;
    }
    return max(arr, index + 1, arr[index], maxCheck);
  }
  console.log(max([-5, 100]));
  // ************
  //#endregion

  //#endregion
})();
