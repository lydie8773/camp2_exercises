/*
Weather api doc: https://openweathermap.org/current
My api key: https://home.openweathermap.org/api_keys
 */

const request = require("request");

const API_KEY = "0a6e753e202820060af40f684e66c306";

const weatherByLatitudeAndLongitude = (latitude, longitude) => {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`,
      method: "GET"
    },
    function(erro, response, result){
      const weather = JSON.parse(result);
      console.log(`${weather.main.temp}°C`);
    }
  );
}

const weatherByZipcode = (zipcode, country) => {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&units=metric&APPID=${API_KEY}`,
      method: "GET"
    },
    function(erro, response, result){
      const weather = JSON.parse(result);
      console.log(`${weather.main.temp}°C`);
    }
  );
}

module.exports = {
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude,
  weatherByZipcode: weatherByZipcode
};
