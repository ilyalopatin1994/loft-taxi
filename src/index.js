import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from "./errorBoundary"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ErrorBoundary>
    <App/>
  </ErrorBoundary>

)