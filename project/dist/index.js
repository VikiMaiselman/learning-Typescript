"use strict";
const btn = document.getElementById("btn");
// btn is of type HTML Element | null (if element not found)
//btn.addEventListener("click", () => {})
// btn is possibly null error
// solutions
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => { });
// not null assertion operator
// const btn = document.getElementById("btn")!
// ! is telling the TS "don't worry, it won't ever be null"
// btn is of type HTML Element 
// type assertions 
const todoInput = document.getElementById("todo");
//otherwise input.value => TS error 
const todolist = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(checkbox);
    newLi.append(newTodo);
    todolist.append(newLi);
    todoInput.value = '';
}
const form = document.getElementById("todoform");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// })
form.addEventListener("submit", handleSubmit);
