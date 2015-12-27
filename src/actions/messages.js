import constants from '../constants';

export function messagesReceived(messages) {
  return {
    type: constants.MESSAGES_RECEIVED,
    messages
  };
}

export function messagesLoading(isLoading) {
  return {
    type: constants.MESSAGES_LOADING,
    isLoading
  };
}
