const request = require("request");
const database = require("../database");

// const baseUrl = "https://decath-product-api.herokuapp.com/";

let count = 0;

function insertCategories(){
  request(
    {
      url: "https://decath-product-api.herokuapp.com/categories",
      method: "GET"
    },
    function(error, response, body){
      let result = JSON.parse(body);
      console.log(result);
      result.map(ele => database.insertCategoriesDB([ele.id, ele.decathlon_id, ele.label], count, result.length));
    }
  );
}
insertCategories();

module.exports = {
  insertCategories: insertCategories
}
