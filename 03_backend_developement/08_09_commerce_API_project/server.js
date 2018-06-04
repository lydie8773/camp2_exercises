const express = require("express");
const app = express();
const database = require("./database");

const port = process.env.PORT || 3000;


app.get("/brands", database.getAllBrands);

app.get("/brands/:id", database.getBrandsById);

app.get("/categories", database.getAllCategories);

app.get("/categories/:id", database.getCategoriesById);

app.get("/products", database.getAllProducts);

app.get("/products/:id", database.getProductsById);

app.get("/categories/:id/products", database.getProductsByCategory);

app.get("*", function(request, result){
  result.send("Error, 404");
});

const route = {
  get: {
    "/brands": database.getAllBrands
  }
};


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

// module.exports = app;
