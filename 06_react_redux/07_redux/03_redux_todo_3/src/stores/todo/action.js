// export function addTodo(text) {
//   return {
//     type: "ADD_TODO",
//     payload: {text}
//   };
// }

export const addTodo = (item) => ({
  type: "ADD_TODO",
  payload: {item}
});

export const deleteItem = (id) => ({
  type: "DELETE_TODO",
  payload: {id}
});


