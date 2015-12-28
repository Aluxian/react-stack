import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {syncReduxAndRouter} from 'redux-simple-router';
import {Provider} from 'react-redux';

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

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
