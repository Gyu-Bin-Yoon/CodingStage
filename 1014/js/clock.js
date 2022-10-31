const clockContainer = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    
    let month = String(date.getMonth()).padStart(2,"0");
    let day = String(date.getDate()).padStart(2,"0");
    let hours = String(date.getHours()).padStart(2,"0");
    let minutes = String(date.getMinutes()).padStart(2,"0");
    let seconds = String(date.getSeconds()).padStart(2,"0");

    clockContainer.innerText = `${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);