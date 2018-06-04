const getAllBrands = require("../database")

test("should return 547 brands", done => {
  expect.assertions(1);
  getAllBrands(null, {
    json: function(brands){
      expect(brands.length).toBe(547);
      done();
    }
  });
});
