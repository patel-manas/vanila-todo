import "./styles.css";
import { Todo } from "./Todo";

localStorage.setItem("lastId", 0);
Todo.todoIds = [];
const todoContainer = document.getElementById("todo_container");
document.querySelector("#add_todo button").addEventListener("click", addTodo);
let todos = [];
populateTodods(todos);

function createTodoItem(todo) {
  let newTodo = document.createElement("div");
  newTodo.setAttribute("class", "todo_item");
  newTodo.setAttribute("id", todo.id);
  const todoTemplate = `
      <input type="checkbox" class="todo_item_checkbox"/>
      <div class="todo_item_desc">${todo.description}</div>
      <div class="delete_todo" id="delete_${todo.id}">delete</div>
      <div class="edit_todo" id="edit_${todo.id}">edit</div>
  `;
  newTodo.innerHTML = todoTemplate;
  return newTodo;
}

function populateTodods(todoItems) {
  if (todoItems && todoItems.length > 0) {
    todoItems.forEach((todo) => {
      todoContainer.appendChild(createTodoItem(todo));
    });
  }
}
function getTodoDescription() {
  let todoDesc = document.getElementById("todo_description").value;
  return todoDesc || "";
}

function clearTodoDescription() {
  let todoDesc = document.getElementById("todo_description");
  todoDesc.value = "";
}
function addTodo() {
  let newTodo = new Todo(getTodoDescription());
  todos.push(newTodo);
  console.log(todos);
  todoContainer.appendChild(createTodoItem(newTodo));
  clearTodoDescription();
  if (todos.length <= 1) {
    document
      .querySelector(".todo_item .delete_todo")
      .addEventListener("click", deleteTodo);
    document
      .querySelector(".todo_item .edit_todo")
      .addEventListener("click", editTodo);
  }
}

function deleteTodo(evt) {
  console.log(evt, evt.target.id);
}
function editTodo() {}
