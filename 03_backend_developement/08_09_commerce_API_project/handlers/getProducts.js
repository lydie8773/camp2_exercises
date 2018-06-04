const request = require("request");
const database = require("../database");

let count = 0;

// const getPostsBrands = (parameter, callback, query) => {
//   let queryUrl;
//   if (query === undefined) {
//     queryUrl = `${baseUrl}/${parameter}`;
//   }else if (isNaN(query)){
//     queryUrl = `${baseUrl}/${parameter}?${query}`;
//   }else {
//     queryUrl = `${baseUrl}/${parameter}/${query}`;
//   }
//   request(
//     {
//       url: queryUrl,
//       method: "GET"
//     }, (error, response, result) => {
//       console.log(result);
//       callback(result);
//     }
//   );
// }

function insertProducts(){
  request(
    {
      url: "https://decath-product-api.herokuapp.com/products",
      method: "GET"
    },
    function(error, response, body){
      let result = JSON.parse(body);
      console.log(result);
      result.map(ele => database.insertProductsDB([ele.id, ele.decathlon_id, ele.title, ele.description, ele.brand_id, ele.min_price, ele.max_price, ele.crossed_price, ele.percent_reduction, ele.image_path, ele.rating], count, result.length));
    }
  );
}

insertProducts();

module.exports = {
  insertProducts: insertProducts
}
