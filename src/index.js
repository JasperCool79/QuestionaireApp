import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import  Context from './context';
const ContextObj = {
    personal_info: {
        first_name: '',
        last_name: '',
        email: ''
    },
    gender: '',
    age_info: '',
    country_info: [],
    spicy_info: 0
};

ReactDOM.render(
  <BrowserRouter>
    <Context.Provider value={ContextObj}>  
      <App />
    </Context.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
