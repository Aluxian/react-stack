import constants from '../constants';
import firebase from '../firebase';

const authData = firebase.getAuth();

export const INITIAL_STATE = {
  user: authData,
  isAuthenticated: !!authData,
  loginError: null
};

export default {

  [constants.AUTH_LOGIN_SUCCESS](state, action) {
    return {
      user: action.user,
      isAuthenticated: true,
      loginError: null
    };
  },

  [constants.AUTH_LOGIN_FAILED](state, action) {
    return {
      user: null,
      isAuthenticated: false,
      loginError: action.error
    };
  },

  [constants.AUTH_LOGOUT](state, action) {
    return {
      user: null,
      isAuthenticated: false,
      loginError: null
    };
  }

};
