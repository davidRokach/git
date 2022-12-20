const countries = [
  "finland",
  "sweden",
  "denmark",
  "norway",
  "iceland",
  "estonia",
];
const names = ["asabeneh", "mathias", "elias", "brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// forEach function can separate all elements in arry and use the elements in kinds of options
// map function creates a new arry with use all elemnts of the orginal arry
//Filter function creates a new array with every element in an array that pass a test
// reduce function refers to all elment in the arry as value (going left-to-right)

// forEach function - start
function callBackF(item, index) {
  console.log(index + " " + item);
}
function countriesForEach() {
  countries.forEach(callBackF);
}
countriesForEach();

function namesForEach() {
  names.forEach(callBackF);
}
namesForEach();

function numbersForEach() {
  numbers.forEach(callBackF);
}
numbersForEach();
// forEach function - end

// map function - start

function callBackM(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
function newCountriesFunc() {
  const newCountries = countries.map(callBackM);
  console.log(newCountries);
}
newCountriesFunc();

function callBackM2(value) {
  return value.length;
}
function newCountriesFuncLe() {
  const newCountriesLength = countries.map(callBackM2);
  console.log(newCountriesLength);
}
newCountriesFuncLe();

function newNamesFunc() {
  const newNamesUpper = names.map(callBackM);
  console.log(newNamesUpper);
}
newNamesFunc();
// map function - end

// filter function - start

const CountriesLand = countries.filter((item) => !item.includes("land"));

console.log(CountriesLand);

const CountriesLeanth = countries.filter((item) => item.length <= 6);

console.log(CountriesLeanth);

const CountriesE = countries.filter((item) => item.charAt(0) !== "e");

console.log(CountriesE);
// filter function - end

// reduce function - start
const total = numbers.reduce(sum, 0);

function sum(accumulator, value) {
  return accumulator + value;
}

console.log(total);

const europeanCountries = countries.reduce(european);

function european(accumulator, country, index) {
  if (countries.length - 1 === index) {
    return (
      " " +
      accumulator +
      " " +
      "and" +
      country +
      " " +
      "are north European countries"
    );
  }
  return accumulator + " " + country + " ";
}

console.log(europeanCountries);
