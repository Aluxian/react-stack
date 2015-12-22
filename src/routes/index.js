import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';

import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import {syncReduxAndRouter} from 'redux-simple-router';

import history from '../history';
import store from '../store';

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="chat" component={Chat} />
          <Route path="login" component={Login} />
          <Route path="*" component={Login} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('container')
);
