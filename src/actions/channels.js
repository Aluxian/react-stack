import constants from '../constants';

export function channelsReceived(channels) {
  return {
    type: constants.CHANNELS_RECEIVED,
    channels
  };
}
