const request = require("request");

const url = "http://jsonplaceholder.typicode.com"

const fetch = (methods, callback, query) => {
  let queryUrl;
  if (query === undefined) {
    queryUrl = `${url}/${methods}`;
  }else if (isNaN(query)){
    queryUrl = `${url}/${methods}?${query}`;
  }else {
    queryUrl = `${url}/${methods}/${query}`;
  }

  request(
    {
      url: queryUrl,
      method: "GET"
    }, (error, response, result) => {
      callback(result);
    }
  );
}

function fetchPosts(callback){
  fetch("posts", callback);
}


const fetchPostByUser = (userId, callback) => {
  fetch("posts", callback, `userId=${userId}`);
}

const fetchPost = (id, callback) => {
  fetch("posts", callback, id);
}

const fetchUsers = (callback) => {
  fetch("users", callback);
}

const fetchUser = (id, callback) => {
  fetch("users", callback, id);
}

const fetchComments = (callback) => {
  fetch("comments", callback);
}

function fetchComment(id, callback) {
  fetch("comments", callback, id);
}

function fetchCommentsByPost(postId, callback) {
  fetch("comments", callback, `postId=${postId}`);
}

const publishPost = (userId, title, body, callback) => {

}


module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchComment: fetchComment,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost: publishPost,
  publishComment: publishComment,
  updatePostTitle: updatePostTitle,
  updatePostBody: updatePostBody,
  updatePost: updatePost
};
