const apiKey = "fd2bf0b51957682e664afe16d9e9dbf6";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiURL +city+ `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"Km/h";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "icons/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "icons/clear.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "icons/drizzle.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "icons/rain.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "icons/mist.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
