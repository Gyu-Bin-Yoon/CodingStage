const todoForm = document.querySelector("#todoForm");
const todoData = document.querySelector("#todoForm input");
const todoContainer = document.querySelector("#todo");
const TODO_KEY = "todo";
const savedToDos = localStorage.getItem(TODO_KEY);
let toDos = [];

function handleSubmitForm(event){
    event.preventDefault();
    const newToDo = todoData.value;
    todoData.value="";
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    };
    toDos.push(newToDoObj);
    drawToDo(newToDoObj);
    saveToDo();
}

function drawToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(button);
    li.appendChild(span);
    todoContainer.appendChild(li);
}

function saveToDo(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    console.log(toDos);
    saveToDo();
    check();
}

todoForm.addEventListener("submit",handleSubmitForm);

if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(drawToDo);
}
