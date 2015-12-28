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

function isAuthenticated() {
  return store.getState().auth.isAuthenticated;
}
