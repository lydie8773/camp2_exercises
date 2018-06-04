const request = require("request");
const database = require("../database");

let count = 0;
let productList = [];

function insertProductsCategories(categories_id){
  request(
    {
      url: `https://decath-product-api.herokuapp.com/categories/${categories_id}/products`,
      method: "GET"
    },
    function(error, response, body){
      let result = JSON.parse(body);

      result.forEach(function(product){
        productList.push(
          {
            categories_id: categories_id,
            products_id: product.id
          }
        );
      });

      if (result !== null){
        result.map(ele => database.insertProductsCategoriesDB([`${categories_id}`, ele.id], count, productList.length));
      }
    }
  );
}

function insertAll(){
  request(
    {
      url: "https://decath-product-api.herokuapp.com/categories",
      method: "GET"
    },
    function(error, response, body){
      let result = JSON.parse(body);
      console.log(result);
      result.map(ele => insertProductsCategories(ele.id));
    }
  );
}

insertAll();

module.exports = {
  insertAll: insertAll
}
