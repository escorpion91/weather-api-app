let weather = {
  apiKey: '63dc3091dd51709cd8302c09095087cd',
  fetchWeather: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=63dc3091dd51709cd8302c09095087cd'
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector('.city').innerText = 'Weather in ' + name;
    document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/' + icon + '.png';
    document.querySelector('.description').innerText = description;
    document.querySelector('.temperature').innerText = temp + '°C';
    document.querySelector('.humidity').innerText =
      'Humidity: ' + humidity + '%';
    document.querySelector('.wind').innerText =
      'Wind speed: ' + speed + ' km/h';
  },
};
