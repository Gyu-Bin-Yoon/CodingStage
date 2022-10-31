const loginForm = document.querySelector("#loginForm");
const nameInput = document.querySelector("#loginForm input");
const loginContainer = document.querySelector("#login");
const LOGIN_KEY = "name";
const savedName = localStorage.getItem(LOGIN_KEY);

function handleSubmitForm(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const inputName = nameInput.value;
    localStorage.setItem(LOGIN_KEY,inputName);
    drawLogin(inputName);
}

function drawLogin(name){
    loginContainer.innerText = `WELCOME ${name}`;
    loginContainer.classList.remove("hidden");
}

if(savedName===null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", handleSubmitForm);
}
else{
    drawLogin(savedName);
}