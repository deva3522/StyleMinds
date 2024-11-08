import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Global styles for the entire application
import reportWebVitals from './reportWebVitals'; // For performance monitoring

// Mounting the React app to the 'root' div in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Logging performance metrics (optional)
reportWebVitals(console.log);
