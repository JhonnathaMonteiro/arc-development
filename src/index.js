import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Maybe withoyt StrictMode to avoid issues with material UI
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

