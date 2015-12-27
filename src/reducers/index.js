function makeReducer(exported) {
  return function(state = exported.INITIAL_STATE, action) {
    const handler = exported.default[action.type];
    if (handler) {
      return handler(state, action);
    } else {
      return state;
    }
  };
}

export default {
  auth: makeReducer(require('./auth')),
  channels: makeReducer(require('./channels')),
  messages: makeReducer(require('./messages'))
};
