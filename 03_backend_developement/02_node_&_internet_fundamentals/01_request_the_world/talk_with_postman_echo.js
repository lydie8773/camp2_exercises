const request = require("request");
const dataFormat = require("dateformat");

function simpleGet(callback){
  request("https://postman-echo.com/get", function(error, response, result){
    // let result = JSON.pares(body)
    console.log(result);
    return callback(result, false);
  })
}

function simpleGetWithParams(callback){
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },
    function(error, response, body){
      let result = JSON.parse(body).args;
      console.log(result);
      return callback(result, false)
    })
}

function validateTimestamp(callback){
  request(
    {
      url: "https://postman-echo.com/time/valid",
      form: {
        timestamp: dataFormat(new Date(), "YYYY-mm-dd")
      },
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
}
