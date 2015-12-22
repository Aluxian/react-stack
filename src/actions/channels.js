import constants from '../constants';

export function channelsReceived() {
  return {
    type: constants.CHANNELS_RECEIVED
  };
}

export function channelsFailed() {
  return {
    type: constants.CHANNELS_FAILED
  };
}

export function channelOpened(channel) {
  return {
    type: constants.CHANNELS_OPENED,
    channel
  };
}
