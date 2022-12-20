// higher order functions

// Exercise 1
(function () {
  const arrayValuesTypes = ["david", "moshe", true, 15, []];

  const newarrayValuesTypes = arrayValuesTypes.map((value) => {
    return typeof value;
  });
  console.log("Exercise 1: " + newarrayValuesTypes);

  // Exercise 2
  const numArry = [11, 15, 6, 8, 9, 10];
  const result = numArry.map(sum2NUmbers);

  function sum2NUmbers(value, index) {
    //   if (index == numArry.length - 1) {
    //     return null;   } else
    if ((value + numArry[index + 1]) % 2 == 0) {
      return true;
    }
    return false;
  }
  const newResult = result.slice(0, -1);
  console.log(`Exercise 2: ${newResult}`);

  // Exercise 3
  function whichIsLarger(f, g) {
    f = function () {
      return num1;
    };
    g = function () {
      return num2;
    };
    if (g > f) {
      return "g";
    } else if (f > g) {
      return "f";
    } else {
      return "neither";
    }
  }

  console.log("Exercise 4: " + whichIsLarger());

  // Exercise 4
  const Sentence = "to be or not to be!";
  const arrySentence = Sentence.split("");
  console.log(arrySentence);

  const reduceFunc = function (acc, item) {
    if (item.charCodeAt(0) % 2 == 0) {
      return acc + item.toUpperCase();
    }
    return acc + item.toLowerCase();
  };

  const CapitalizeSentence = arrySentence.reduce(reduceFunc, "");
  console.log("Exercise 4: " + CapitalizeSentence);

  // Exercise 5

  function addFunc(basenum) {
    const innerFunc = (num2) => (sum = basenum + num2);
    return innerFunc;
  }
  sumOfAdd = addFunc(2)(5);
  console.log(
    `Exercise 5: basenum is 2, and num2 is 5, the sum of them is - ${sumOfAdd}`
  );

  // Exercise 6
  function add_suffix(ly) {
    const add_ly = (Word) => (newWord = Word + ly);
    return add_ly;
  }

  resultAdd_suffix = add_suffix("ly")("total");
  console.log(
    `Exercise 6: add_ly = ("total"), the answer is -  ${resultAdd_suffix}`
  );

  // Exercise 7
  function calcAge(age) {
    if (age < 0) {
      return `age can't be under zero`;
    }

    return age * 365;
  }
  ageInDays = calcAge(50);
  console.log(`Exercise 7: age = 50, age in days - ${ageInDays}`);

  // Exercise 8

  function addUp(num) {
    let sumAddUp;

    for (let i = 0; i < num; i++) {
      let sumAddUp;
      sumAddUp += i;
    }
    return sumAddUp;
  }
  console.log(addUp(4));
})();
