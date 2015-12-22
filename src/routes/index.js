import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';

import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect} from 'react-router';
import {syncReduxAndRouter} from 'redux-simple-router';

import history from '../history';
import store from '../store';

syncReduxAndRouter(history, store);

function requireAuth(nextState, replaceState) {
  // if (!auth.loggedIn()) {
  //   replaceState({ nextPathname: nextState.location.pathname }, '/login');
  // }
}

function redirectIfAuth(nextState, replaceState) {
  // if (auth.loggedIn()) {
  //   replaceState({ nextPathname: nextState.location.pathname }, '/chat');
  // }
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRedirect to="chat" />
          <Route path="chat" component={Chat} onEnter={requireAuth} />
          <Route path="login" component={Login} onEnter={redirectIfAuth} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('container')
);
