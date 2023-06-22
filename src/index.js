import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';


ReactDOM.render(
  <Provider store={store }>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode> 
  </Provider>
,
  document.getElementById('root')
);
