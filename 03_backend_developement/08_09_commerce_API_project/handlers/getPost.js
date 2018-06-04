const PG = require("pg");



function getPostFromDatabase(postId, callback){
  client.query(
    "SELECT * FROM my_table WHERE id = $1",
    postId,
    function(error, result, callback){
      if(error){
        console.warn(error);
      }else{
        callback(result.rows);
      }
      client.end();
    }
  );
}


module.exports = function(request, result) {
  const posts = getPostFromDatabase (request.params.postId, function(posts){
    result.json(posts);
  });

}
