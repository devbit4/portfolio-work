import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

import { Provider } from "react-redux";
import AuthService from './service/auth_service';
import { PersistGate } from 'redux-persist/integration/react';
import store, { Persistor } from './redux/store';


const authService = new AuthService();

ReactDOM.render(

  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <App authService={authService} />
      </PersistGate>
    </Provider>
  </HashRouter>
  ,
  document.getElementById('root')
);
