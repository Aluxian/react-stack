import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {syncReduxAndRouter} from 'redux-simple-router';
import {createHistory} from 'history';
import routes from './routes';
import store from './store';

const history = createHistory();
syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    {routes(history)}
  </Provider>,
  document.getElementById('container')
);
