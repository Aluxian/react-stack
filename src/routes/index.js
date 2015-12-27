import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';
import * as handlers from './handlers';

import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';

function render(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App} onEnter={handlers.getAuth}>
        <IndexRedirect to="chat" />
        <Route path="chat/:channelKey" component={Chat} onEnter={handlers.requireAuth} />
        <Route path="chat" component={Chat} onEnter={handlers.requireAuth} />
        <Route path="login" component={Login} onEnter={handlers.redirectIfAuth} />
      </Route>
    </Router>
  );
}

export default render;
