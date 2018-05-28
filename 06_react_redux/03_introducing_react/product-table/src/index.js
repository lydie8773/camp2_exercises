import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductTable from "./ProductTable";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ProductTable />, document.getElementById("productTable"));
registerServiceWorker();
