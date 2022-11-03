import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example from './components/MyHook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
   {/* <Game /> */}
    </>
);


reportWebVitals();
