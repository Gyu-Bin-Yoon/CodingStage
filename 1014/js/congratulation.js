//const dDayContainer = document.querySelector("#dDay");
//const savedToDos = localStorage.getItem(TODO_KEY);
const content = document.querySelector("#content");
const congratulation = document.querySelector("#congratulation");
const parsedToDos = JSON.parse(savedToDos);


function check(){
    if(dDayContainer.innerText === "!!!종강!!!" && (parsedToDos.length === 0 || savedToDos===null)){
        content.classList.add("hidden");
        congratulation.classList.remove("hidden");
    }
}

check();

