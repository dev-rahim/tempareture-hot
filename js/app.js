const loadData = async () => {

    const searchFild = document.getElementById('search');
    console.log(searchFild.value);

    // const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=9346bda862bd4deea51181702222605&q=${searchFild.value}&aqi=no`);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchFild.value}&appid=c2756ab52ce9283c29c4a3cd34eba79b&units=metric`);
    const data = await res.json();
    searchFild.value = '';
    document.getElementById('weather-status-container').innerHTML = `
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data.name}</h1>
            <h3><span>${data.main.temp}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
    `;
}
