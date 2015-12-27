import constants from '../constants';
import rebase from '../rebase';

const authData = rebase.getAuth();

export const INITIAL_STATE = {
  user: authData,
  isAuthenticated: !!authData,
  authError: null
};

export default {

  [constants.AUTH_LOGIN_SUCCESS](state, action) {
    return {
      user: action.user,
      isAuthenticated: true,
      authError: null
    };
  },

  [constants.AUTH_LOGIN_FAILED](state, action) {
    return {
      user: null,
      isAuthenticated: false,
      authError: action.error
    };
  }

};
