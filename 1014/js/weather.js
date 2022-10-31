const API_KEY = "3035896ae5375a943ca0972ae34aba2b";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const background = document.querySelector("#background");

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data)=>{
        const currentCity = data.name;
        const currentWeather = data.weather[0].main;
        const temperature = data.main.temp;
        city.innerText = data.name;

        getBGAndIcon(currentWeather, temperature);
    })
}

function getBGAndIcon(currentWeather,temperature){
    const images = ["Clear.jpg", "Cloud.jpg", "Rain.jpg", "Snow.jpg","Default.png"];
    const bgImage = document.createElement("img");
    
    let weatherIcon = "";

    switch(currentWeather) {
        case "Clear":  
            bgImage.src = `img/${images[0]}`;
            weatherIcon = "☀️"
            break;
    
        case "Clouds":  
            bgImage.src = `img/${images[1]}`;
            weatherIcon = "☁️";
            break;
        
        case "Rain":  
            bgImage.src = `img/${images[2]}`;
            weatherIcon = "☔";
            break;  

        case "Snow":  
            bgImage.src = `img/${images[3]}`;
            weatherIcon = "☃️";
            break;

        default:
            bgImage.src = `img/${images[4]}`;
            break;
    }

    background.appendChild(bgImage);
    weather.innerText = `${currentWeather}${weatherIcon} ${Math.round(temperature)}°C`;

}

function onGeoError(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);