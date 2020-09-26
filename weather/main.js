const apikey = "dc35e671635d67c315387cdaf680cb8c";
var container = document.getElementById('container');
var input = document.getElementById('searchInput');
var form = document.getElementById('form')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(input.value){
        getWeatherByLocation(input.value)
    }
    input.value = ``;
})

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city));

    const respData = await resp.json();
    console.log(respData)
    build(respData);
}

function build(data){

    var windDirection = (deg) => {

        container.innerHTML = ``;

        if(deg > 0 && deg < 90) return 'SE';
        if(deg > 90 && deg < 180) return 'SE';
        if(deg > 180 && deg < 270) return 'SW';
        if(deg > 270 && deg < 360) return 'NW';
    }
     
    var text = `
        <p class ='name'>${data.name}</p>
        <p class ='temp'>${Math.floor(data.main.temp - 273.15)}&#8451;</p>
        <p class ='wind'>${windDirection(data.wind.deg)}</p>
        <img class ='icon' src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
        `
    container.innerHTML = text;
}

