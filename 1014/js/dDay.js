const dDayForm = document.querySelector("#dDayForm");
const dDayInput = document.querySelector("#dDayForm input")
const dDayContainer = document.querySelector("#dDay");
const DDAY_KEY="dDay";
const savedDay = localStorage.getItem(DDAY_KEY);

function handleSubmitForm(event){
    event.preventDefault();
    dDayForm.classList.add("hidden");
    const inputDay = dDayInput.value;
    localStorage.setItem(DDAY_KEY,inputDay);
    calDDay(inputDay);
}

function calDDay(dDay){
    const masTime = Date.parse(dDay);
    const todayTime = new Date();
    const remainTime = masTime - todayTime;

    if(remainTime<=0){
        dDayContainer.innerText="!!!종강!!!";
        dDayContainer.classList.remove("hidden");
        check();
        return;
    }
    
    const diffDay = Math.floor(remainTime/(1000*60*60*24));
    const diffHour = String(Math.floor(remainTime/(1000*60*60)%24)).padStart(2,"0");
    const diffMin = String(Math.floor(remainTime/(1000*60)%60)).padStart(2,"0");
    const diffSec = String(Math.floor(remainTime/1000%60)).padStart(2,"0");

    dDayContainer.innerText = `${diffDay} days ${diffHour}:${diffMin}:${diffSec}`;
    dDayContainer.classList.remove("hidden");

    setInterval(calDDay,1000,dDay);

}

if(savedDay===null){
    dDayForm.classList.remove("hidden");
    dDayForm.addEventListener("submit",handleSubmitForm);
}
else{
    calDDay(savedDay);
}