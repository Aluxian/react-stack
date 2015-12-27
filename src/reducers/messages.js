import constants from '../constants';

export const INITIAL_STATE = {
  isLoading: true,
  data: {}
};

export default {

  [constants.MESSAGES_RECEIVED](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.messages
    };
  },

  [constants.MESSAGES_LOADING](state, action) {
    return {
      ...state,
      isLoading: action.isLoading
    };
  }

};
