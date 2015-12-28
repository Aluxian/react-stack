import {replacePath} from 'redux-simple-router';
import {promisify} from 'bluebird';
import constants from '../constants';
import firebase from '../firebase';

export function authLoginRequest() {
  return async (dispatch) => {
    try {
      const user = await promisify(::firebase.authWithOAuthPopup)('google');
      dispatch(authLoginSuccess(user));
      dispatch(replacePath('/chat'));
      return true;
    } catch(ex) {
      dispatch(authLoginFailed(ex));
      return false;
    }
  };
}

export function authLoginSuccess(user) {
  return {
    type: constants.AUTH_LOGIN_SUCCESS,
    user
  };
}

export function authLoginFailed(error) {
  return {
    type: constants.AUTH_LOGIN_FAILED,
    error
  };
}

export function authLogOut() {
  return {
    type: constants.AUTH_LOGOUT
  };
}
