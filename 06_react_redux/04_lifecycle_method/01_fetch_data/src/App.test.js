import React from 'react';
import ReactDOM from 'react-dom';
import DogApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DogApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
