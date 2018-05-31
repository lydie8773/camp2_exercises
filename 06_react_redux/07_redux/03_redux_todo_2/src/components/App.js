import React from 'react';

import Layout from './Layout';
import TodoList from '../containers/TodoList';
import TodoInput from '../containers/TodoInput';

const App = () => {
  return(
    <Layout>
      <TodoList />
      <TodoInput />
    </Layout>
  );
}

export default App;
