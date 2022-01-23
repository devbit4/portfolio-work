import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

import { Provider } from "react-redux";
import store from "./redux/store";
import AuthService from './service/auth_service';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App authService={authService} />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
