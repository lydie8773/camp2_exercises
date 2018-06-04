const PG = require("pg");
// const getPosts = require("./handlers/getPosts")

// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5436/camp2';

// const conString = "postgres://camp2:camp2@localhost:5436/camp2";
//
// const client = new PG.Client(conString);
const client = new PG.Client();
client.connect();

// const totalBrands = 546;
// const totalCategories = 1002;
// const totalProducts = 16902;

// function queryCreateBrandsTable() {
//   client.connect();
//   client.query(
//     "CREATE TABLE brands(id VARCHAR(100), title VARCHAR(100))",
//     function(error, result, callback){
//       if(error){
//         console.warn(error);
//       }else{
//         callback(result.rows);
//       }
//       client.end();
//     }
//   );
// }
//
// function queryCreateCategoriesTable() {
//   client.connect();
//   client.query(
//     "CREATE TABLE categories(id VARCHAR(100), decathlon_id VARCHAR(50), label VARCHAR(100))",
//     function(error, result){
//       if(error){
//         console.warn(error);
//       }else{
//         console.log(result);
//       }
//       client.end();
//     }
//   );
// }

function insertBrandsDB(value, index, total){
  client.query(
    "INSERT INTO brands (id, title) values ($1::uuid, $2::varchar)",
    value,
    function(error, result){
      if(error){
        console.warn(error);
      }else{
        console.log(result);
        index++;
        if(index >= total){
          client.end();
        }
      }
      // client.end();
    }
  );
}

function insertCategoriesDB(value, index, total){
  client.query(
    "INSERT INTO categories (id, decathlon_id, label) values ($1, $2, $3)",
    value,
    function(error, result){
      if(error){
        console.warn(error);
      }else{
        console.log(result);
        index++;
        if(index >= total){
          client.end();
        }
      }
      // client.end();
    }
  );
}

function insertProductsDB(value, index, total){
  client.query(
    "INSERT INTO products (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    value,
    function(error, result){
      if(error){
        console.warn(error);
      }else{
        console.log(result);
        index++;
        if(index >= total){
          client.end();
        }
      }
      // client.end();
    }
  );
}

// insertBrandsDB(["1", "test"])


function insertProductsCategoriesDB(value, index, total){
  client.query(
    "INSERT INTO categories_products (categories_id, products_id) values ($1, $2)",
    value,
    function(error, result){
      if(error){
        console.warn(error);
      }else{
        console.log(result);
        index++;
        if(index >= total){
          client.end();
        }
      }
      // client.end();
    }
  );
}


function getAllBrands(request, result) {
  console.log("connected to database");
  client.query(
    "SELECT * FROM brands",
    function(error, res){
      if(error){
        console.warn(error);
      }else if(res.rows.length === 0){
        result.send("no data match!");
      }else{
        result.send(res.rows);
      }
    }
  );
}

function getBrandsById(request, result){
  client.query(
    "SELECT * FROM brands WHERE id = $1",
    [request.params.id],
    function(error, res){
      if(error){
        console.warn(error);
      }else if(res.rows.length === 0){
        result.send("no data match!");
      }else{
        res.rows.forEach(function(ele){
          if (ele !== null) {
            result.send(ele);
          }
        });
      }
    }
  )
}


function getAllCategories(request, result) {
  client.query(
    "SELECT * FROM categories",
    function(error, res){
      if(error){
        console.warn(error);
      }else if(res.rows.length === 0){
        result.send("no data match!");
      }else{
        // const r = JSON.parse(res);
        // console.log("JSON IS: " + JSON.parse(res));
        result.send(res.rows);
      }
    }
  );
}

function getCategoriesById(request, result){
  client.query(
    "SELECT * FROM categories WHERE id = $1",
    [request.params.id],
    function(error, res){
      if(error){
        console.warn(error);
      }else if(res.rows.length === 0){
        result.send("no data match!");
      }else{
        res.rows.forEach(function(ele){
          if (ele !== null) {
            result.send(ele);
          }
        });
      }
    }
  )
}

function getAllProducts(request, result) {
  console.log("connected to database");
  client.query(
    "SELECT * FROM products",
    function(error, res){
      if(error){
        console.warn(error);
      }else if(res.rows.length === 0){
        result.send("no data match!");
      }else{
        result.send(res.rows);
      }
    }
  );
}

function getProductsById(request, result){
  client.query(
    "SELECT * FROM products WHERE id = $1",
    [request.params.id],
    function(error, res){
      if(error){
        console.warn(error);
      }else if(res.rows.length === 0){
        result.send("no data match!");
      }else{
        res.rows.forEach(function(ele){
          if (ele !== null) {
            result.send(ele);
          }
        });
      }
    }
  )
}

function getProductsByCategory (request, result){
  client.query(
    "SELECT p.* FROM categories_products cp inner join products p on p.id=cp.products_id WHERE cp.categories_id = $1",
    [request.params.id],
    function(error, res){
      if(error){
        console.warn(error);
      }else{
        result.send(res.rows);
      }
    }
  )
}

module.exports = {
  insertBrandsDB: insertBrandsDB,
  insertCategoriesDB: insertCategoriesDB,
  insertProductsDB: insertProductsDB,
  insertProductsCategoriesDB: insertProductsCategoriesDB,
  getAllBrands: getAllBrands,
  getBrandsById: getBrandsById,
  getAllCategories: getAllCategories,
  getCategoriesById: getCategoriesById,
  getAllProducts: getAllProducts,
  getProductsById: getProductsById,
  getProductsByCategory: getProductsByCategory
}
