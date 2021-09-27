import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hook from "./components/Hook";
import reportWebVitals from './reportWebVitals';
import Color from "./components/color";
import Counter from "./Counter";
import store from "./store/store";
import {Provider} from "react-redux";
import Todo from "./Todo";




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
        <Todo/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
