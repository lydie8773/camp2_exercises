const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY_WEATHER;

function weatherByCity (city){
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
    {
      method: "GET"
    }
  )
  .then((response) => response.json());
}

const getCityWeather = weatherByCity("London");

getCityWeather
  .then((result) => {
    console.log("Weather by city: "+result.main.temp+"°C");
    return result.main.temp;
  })
  .catch((error) => {
    console.warn(error);
  });

function weatherByLatitudeAndLongitude (latitude, longitude){
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`,
    {
      method: "GET"
    }
  )
  .then((response) => response.json());
}

const getLocationWeather = weatherByLatitudeAndLongitude("32.661343", "51.680374");
getLocationWeather
  .then((result) => {
    console.log("Weather by location: "+result.main.temp+"°C");
    return result.main.temp;
  })
  .catch((error) => {
    console.warn(error);
  });
