import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes';
import './index.css';
import './app.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
