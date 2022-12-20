const rand = Math.random(); // [0-1)

const rand2 = rand * 6; // [0-6)

const rand3 = Math.floor(rand2); // [0-5]

const rand4 = rand3 + 1; // [1-6]

// console.log(rand);
// console.log(rand2);
// console.log(rand3);
// console.log(rand4);

// // class HM
// console.log(rand);
// // **************************
// const int100 = rand * 101;
// console.log(Math.floor(int100));
// // ***************************
// const int200 = rand * 201;
// console.log(Math.floor(int200));
// // ***************************
// const int50_250 = rand * 201 + 50;
// console.log(Math.floor(int50_250));

// // ******************************

// for (let index = 0; index < 100; index++) {
//   let rang = Math.random();
//   const int30_40 = rang * 11 + 30;
//   console.log(Math.floor(int30_40));
// }
// ***********************************

array = [];
const length = Math.floor(Math.random() * 6 + 10);
for (let index = 0; index < length; index++) {
  let rang2 = Math.random() * 11 + 30;
  array[index] = Math.floor(rang2);
}
console.log(array);
const sum = array.reduce((acc, value) => acc + value, 0);
console.log(sum / array.length);

// **********************************************
