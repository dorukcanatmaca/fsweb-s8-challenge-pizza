import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import { Normalize } from 'styled-normalize';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Normalize />
    <App />
  </BrowserRouter>
)
