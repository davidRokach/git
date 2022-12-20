export function deleteTodo(todos) {
  var index = prompt("Enter index of todo to delete");
  todos.splice(+index, 1);
  console.log("Deleted todo");
}
