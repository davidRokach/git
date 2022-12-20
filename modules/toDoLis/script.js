import { printList } from "/.printList.js";
import { addTodo } from "/.addTodo.js";
import { deleteTodo } from "/.deleteTodo.js";

const todos = ["Buy milk", "Eat dinner", "Nap"];
let input;
do {
  input = prompt("What would you like to do?");
  if (input === "list") {
    printList(todos);
  } else if (input === "new") {
    addTodo(todos);
  } else if (input === "delete") {
    deleteTodo(todos);
  }
} while (input !== "quit");

console.log("OK, YOU QUIT THE APP");
