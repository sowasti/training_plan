import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-vkminiapps';
import structure from './structure';
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router structure={structure}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


