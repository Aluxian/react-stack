import constants from '../constants';

export function channelsReceived(channels) {
  return {
    type: constants.CHANNELS_RECEIVED,
    channels
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
