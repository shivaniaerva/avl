import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' for React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create root using ReactDOM.createRoot and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
