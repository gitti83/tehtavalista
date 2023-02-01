import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import express from "express"
import reportWebVitals from './reportWebVitals';
// import axios from 'axios';

// const promise = axios.get('http://localhost:3001/notes')
// promise.then(response => {
  // console.log(response)
// })

//const app = express()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();