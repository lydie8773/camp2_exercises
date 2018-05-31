import React from 'react';

import TodoList from '../containers/TodoList';
import TodoInput from '../containers/TodoInput';

const App = () => {
  return(
    <div className="container">
      <h1 className="text-center">Your Todo List</h1>
      <TodoInput />
      <TodoList />

    </div>
  );
}

export default App;
