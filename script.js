const api = {
    key: '0096f09e92bca76ae14630aa47f362a3',
    base: 'https://api.openweathermap.org/data/2.5/weather?',
  };
  const Input = document.getElementById('input');

  Input.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
      getWeather(Input.value);
  
      /*-------------------FUNCTION TO DISPLAY DATE AND TIME USING MOMENT.JS-------------------*/
  
      const date = moment();
      document.getElementById('date').innerHTML = date.format(
        'Mo MMM YYYY dddd, h:mm:ss'
      );
  
      document.querySelector('.main-weather').style.display = 'block'; //used to show the details as initially the display is set as none
    }
  });

  function getWeather(city) {
    fetch(`${api.base}q=${city}&appid=${api.key}&units=metric`)
      .then((details) => {
        return details.json();
      })
      .then(showWeather);
  }
  function showWeather(details) {
    //Taking the received values from API into this function
    let city = document.getElementById('city');
    city.innerHTML = `${details.name}, ${details.sys.country}`;
  
    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(details.main.temp)}°C`;
  
    let minMax = document.getElementById('min-max');
    minMax.innerHTML = `${Math.round(
      details.main.temp_min
    )}°C (Min) and ${Math.round(details.main.temp_max)}°C (Max) `;
  
    let weatherType = document.getElementById('weather-type');
    weatherType.innerHTML = `${details.weather[0].main}`;
  }