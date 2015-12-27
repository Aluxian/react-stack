import constants from '../constants';

export const INITIAL_STATE = {
  isLoading: true,
  data: {}
};

export default {

  [constants.CHANNELS_RECEIVED](state, action) {
    return {
      ...state,
      isLoading: false,
      data: {
        ...state.data,
        ...action.channels
      }
    };
  }

};
