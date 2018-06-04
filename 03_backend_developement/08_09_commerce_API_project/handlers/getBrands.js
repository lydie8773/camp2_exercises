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

function insertBrands(){
  request(
    {
      url: "https://decath-product-api.herokuapp.com/brands",
      method: "GET"
    },
    function(error, response, body){
      let result = JSON.parse(body);
      console.log(result);
      result.map(ele => database.insertBrandsDB([ele.id, ele.title], count, result.length));
    }
  );
}

insertBrands();


module.exports = {
  insertBrands: insertBrands
}
