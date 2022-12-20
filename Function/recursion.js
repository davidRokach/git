(function () {
  const arry = [11, 15, 6, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  const recursivSum = (arry, index = 0, acc = 0) => {
    if (index === arry.length) {
      return acc;
    }
    return recursivSum(arry, index + 1, acc + arry[index]);
  };
  console.log(recursivSum(arry));

  const recursivSumarize = (jump, arry, index = 0, acc = 0) => {
    index += index === 0 ? jump - 1 : jump;
    if (index >= arry.length) {
      return acc;
    }
    const rtn = recursivSumarize(jump, arry, index, acc + arry[index]);
    return rtn;
  };
  console.log(recursivSumarize(4, arry));

  // Exercise 1
  const arrayBeforeSum = [1, 2, 3, 4, 5, 6];

  const array_sum = function (my_array) {
    if (my_array.length === 1) {
      return my_array[0];
    } else {
      return my_array.pop() + array_sum(my_array);
      //   .pop - remove the last elemnt in array and return it
    }
  };

  console.log("Exercise 1: " + array_sum(arrayBeforeSum));
  // Exercise 2

  const sumInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const array_sumI = function (my_array, sum, index = 0, acc = 0) {
    if (index === sum) {
      return acc;
    } else {
      return array_sumI(my_array, sum, index + 1, acc + my_array[index]);
    }
  };

  console.log("Exercise 2: " + array_sumI(sumInput, 5));
  // Exercise 3
  const factorialFun = function (input, index = 0, acc = 1) {
    if (input === 0) {
      return acc;
    } else {
      return factorialFun(input - 1, index + 1, acc * input);
    }
  };
  const factorialNum = 5;
  console.log("Exercise 3: " + factorialFun(factorialNum));

  // Exercise 4

  const check_length = function (input, index = 0, acc = 0) {
    if (input[index] === undefined) {
      return acc;
    } else {
      return check_length(input, index + 1, acc + input[index].length);
    }
  };
  stringL = "david";
  console.log("Exercise 4: " + check_length(stringL));

  // Exercise 5
  const CountVowels = function (input, index = 0, acc = 0) {
    const vowelas = ["a", "e", "i", "o", "u"];
    const theInput = input.charAt(index).toLowerCase();
    if (input[index] === undefined) {
      return acc;
    } else if (vowelas.includes(theInput)) {
      return CountVowels(input, index + 1, acc + 1);
    } else {
      return CountVowels(input, index + 1, acc + 0);
    }
  };
  stringCount = "davId";
  console.log("Exercise 5: " + CountVowels(stringCount));

  // Exercise 6

  const rangeFun = function (num1, num2, acc = [num1 + 1]) {
    if (num1 + 2 === num2) {
      return acc;
    } else {
      return rangeFun(num1 + 1, num2, [acc, num1 + 2]);
    }
  };
  const range = rangeFun(10, 20);
  console.log("Exercise 6: " + range);

  // Exercise 7
  const findIndexFun = function (array, input, index = 0, acc = 0) {
    if (!array.includes(input)) {
      return -1;
    } else if (input === array[index]) {
      return acc;
    } else {
      return findIndexFun(array, input, index + 1, acc + 1);
    }
  };
  const findIndex = findIndexFun([2, 4, 6, 5, 10, 15, 20, 3, 10], 8);
  console.log("Exercise 7: " + findIndex);
  // Exercise 8
  const reverseString = function (input, index = 0, acc = "") {
    const lengthString = input.length;
    if (index >= lengthString) {
      return acc;
    } else {
      return reverseString(
        input,
        index + 1,
        acc + input[lengthString - (index + 1)]
      );
    }
  };
  orginalString = "world";
  console.log("Exercise 8: " + reverseString(orginalString));
})();
