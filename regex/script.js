const regEx = /[a-zA-z]/g;
console.log(regEx.test("ABC"));

//#region 6 Is the Last Character an "N"?

const checkN = /\w+n$/g;
console.log(checkN.test("Aiden"));
console.log(checkN.test("Roxy"));
//#endregion

//#region 7 Amazing!

const amazing = /Amazing/gm;
console.log("Amazing:" + amazing.test("Amazing"));
console.log("This is Amazing!:" + amazing.test("This is Amazing!"));
console.log("This is Amazin!:" + amazing.test("This is Amazin!"));
//#endregion

//#region 8
const Capitalization = /[A-Z].+/gm;
console.log(
  "Their artwork is exceptional:" +
    Capitalization.test("Their artwork is exceptional")
);
console.log(
  "one plus tw0 is not three:" +
    Capitalization.test("one plus tw0 is not three")
);
console.log("TRUSTWORTHY:" + Capitalization.test("TRUSTWORTHY"));
//#endregion

//#region 9
let arr = ["goal", "new", "user", "sit", "eat", "dinner"];

const checkE = /^(?<!e)[a-df-z]+(?!e)$/g;
console.log(checkE.test("user"));

const newarr = arr.filter((word) => checkE.test(word));
console.log(newarr);
