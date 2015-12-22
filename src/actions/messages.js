import constants from '../constants';

export function messagesReceived() {
  return {
    type: constants.MESSAGES_RECEIVED
  };
}

export function messagesFailed() {
  return {
    type: constants.MESSAGES_FAILED
  };
}

export function messagesLoading() {
  return {
    type: constants.MESSAGES_LOADING
  };
}

export function sendMessage(message) {
  return {
    type: constants.SEND_MESSAGE,
    message
  };
}

export function messageSendSuccess() {
  return {
    type: constants.MESSAGE_SEND_SUCCESS
  };
}

export function messageSendError() {
  return {
    type: constants.MESSAGE_SEND_ERROR
  };
}

export function messageReceived() {
  return {
    type: constants.MESSAGE_RECEIVED
  };
}
