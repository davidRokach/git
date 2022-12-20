(function () {
  //#region to do
  const todos = ["Buy milk", "Eat dinner", " Nap"];

  //   let input;
  //   do {
  //     input = prompt("what would youe like to do");
  //     if (input === "list") {
  //       printList();
  //     } else if (input === "new") {
  //       addTodo();
  //     } else if (input === "delete") {
  //       deleteTodo();
  //     }
  //   } while (input !== "quit");
  //   console.log("ok, you quit the app");

  function printList() {
    console.log("******** printing list ********");
    todos.forEach((todo, i) => {
      console.log(`${i}: ${todo}`);
    });
    console.log("********************");
  }
  function addTodo() {
    const newTodo = prompt("enter new todo");
    todos.push(newTodo);
    console.log("Added todo");
  }
  function deleteTodo() {
    const index = prompt("enter index of todo to delete");
    todos.splice(+index, 1);
  }
  //#endregion

  //#region print reverse

  const arrayReverse = [1, 2, 3, 4];

  function printReverse(array) {
    array.reverse();
    array.forEach((item) => console.log(item));
  }
  printReverse(arrayReverse);

  // *************************************
  const isUniform = [1, 1, 1, 1, 1];
  function isUniformFun(array) {
    const First = array[0];
    for (const intar of array) {
      if (intar !== First) return false;
    }
    return true;
  }
  console.log(isUniformFun(isUniform));

  //   ****************************************
  function sumArray(array) {
    const sum = array.reduce(callBack, 0);
    function callBack(acc, value) {
      return acc + value;
    }
    return sum;
  }

  const total = sumArray([1, 5, 10]);
  console.log(total);

  Array.prototype;
})();
