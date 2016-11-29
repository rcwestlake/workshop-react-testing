import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import groceries from './data';
import './index.css';

ReactDOM.render(
  <App groceries={groceries} />,
  document.getElementById('root')
);
