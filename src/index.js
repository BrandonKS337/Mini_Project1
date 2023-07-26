import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM instead of ReactDOM.createRoot
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// to play with measuring app performance :: https://bit.ly/CRA-vitals
reportWebVitals();
