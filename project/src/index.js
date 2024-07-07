var btn = document.getElementById("btn");
// btn is of type HTML Element | null (if element not found)
//btn.addEventListener("click", () => {})
// btn is possibly null error
// solutions
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () { });
// not null assertion operator
// const btn = document.getElementById("btn")!
// ! is telling the TS "don't worry, it won't ever be null"
// btn is of type HTML Element 
// type assertions 
var todoInput = document.getElementById("todo");
//otherwise input.value => TS error 
var todolist = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    var newTodo = todoInput.value;
    var newLi = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(checkbox);
    newLi.append(newTodo);
    todolist.append(newLi);
    todoInput.value = '';
}
var form = document.getElementById("todoform");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// })
form.addEventListener("submit", handleSubmit);
