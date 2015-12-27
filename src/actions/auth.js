import {replacePath} from 'redux-simple-router';
import {promisify} from 'bluebird';
import constants from '../constants';
import rebase from '../rebase';

export function authLoginRequest() {
  return async (dispatch) => {
    try {
      const user = await promisify(rebase.authWithOAuthPopup)('google');
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
