const currentWeatherItemsEl = document.getElementById('Current-weather');
const weatherForecastEl = document.getElementById('weather-forecast');
const display = document.getElementById('clock');
const Day_date=document.getElementById('Day_date');
const day_of_week=document.getElementById('day_of_week');
const date = new Date();
const day = date.getDay();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateTime() {
    const date = new Date();
    const day = date.getDay();
    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    let interval='  AM';
    if(hour>12){
        interval='  PM'
    };
    display.innerText=`${hour} : ${minutes}   ${interval}`;
    Day_date.innerText = date.getDate() + '  ' + months[date.getMonth()] + '  ' + date.getFullYear();
    day_of_week.innerText=days[date.getDay()];
}

function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}
setInterval(updateTime, 1000);

const API_KEY = '5a3caffbd52144f1baa738ea475e0c43';

getWeatherData()
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {

        let { latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

            console.log(data)
            showWeatherData(data);
        })

    })
}
function showWeatherData(data) {
    let { humidity, pressure, sunrise, sunset, wind_speed,temp ,weather } = data.current;

    currentWeatherItemsEl.innerHTML =` <img id="img" src="https://cdn-icons-png.flaticon.com/128/3313/3313998.png">
        <div id="cw">
            <div><b id="desc">${weather[0].description}</b></div>
             <br>
            <div>Humidity-${humidity}</div>
            <div>Wind Speed-${wind_speed}</div>
            <div>Temperature-${temp}</div>
        </div>`}
        
       
    
    ;
    






