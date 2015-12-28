import actions from '../actions';
import firebase from '../firebase';
import store from '../store';

export function requireAuth(nextState, replaceState) {
  if (!isAuthenticated()) {
    replaceState(null, '/login');
  }
}

export function redirectIfAuth(nextState, replaceState) {
  if (isAuthenticated()) {
    replaceState(null, '/chat');
  }
}

export function logOut(nextState, replaceState) {
  firebase.unauth();
  store.dispatch(actions.authLogOut());
  replaceState(null, '/login');
}

function isAuthenticated() {
  return store.getState().auth.isAuthenticated;
}
