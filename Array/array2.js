const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(typeof arr); //object

const obj = {};
const arr_ex2 = ["asd", "qwe", ["zxc", "rty"]];
console.log(arr_ex2[2][1][2]);

// let arrayInput = [];
const input = document.querySelector(`#input`);

//   arrayInput.innerHTML = input.value;
//   console.log(arrayInput);
// });
input.addEventListener("click", ($event) => {
  console.log($event.target.value);
  const nums = $event.target.value.split(" ").map((x) => parseInt(x));
  console.log(nums);
  const total = nums.reduce(sum, 0);

  function sum(accumulator, value) {
    return accumulator + value;
  }
  console.log(`sum: ${total}`);
  console.log(`average: ${total / nums.length}`);
});
