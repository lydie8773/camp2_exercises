/*
Weather api doc: https://openweathermap.org/current
My api key: https://home.openweathermap.org/api_keys
 */

const request = require("request");

const API_KEY = "0a6e753e202820060af40f684e66c306";

const weatherByCity = (city) => {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
      method: "GET"
    },
    function(error, response, result) {
      const weather = JSON.parse(result);
      console.log(`${weather.main.temp}°C`);
    }
  );
}

module.exports = weatherByCity;
