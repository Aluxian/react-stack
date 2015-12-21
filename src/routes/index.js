import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';

import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute } from 'react-router';
import {syncReduxAndRouter} from 'redux-simple-router';
import { createHistory } from 'history';

import store from '../store';

// import { devTools } from 'redux-devtools';
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const history = createHistory();

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <DefaultRoute component={Chat} />
        <Route path="chat" component={Chat} />
        <Route path="chat/:channel" component={Chat} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);

// <DebugPanel top right bottom>
//   <DevTools store={store} monitor={LogMonitor} />
// </DebugPanel>
