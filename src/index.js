import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
