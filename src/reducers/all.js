import constants from '../constants';
import _ from 'lodash';

const initialState = {
  user: null,
  messages: [],
  messagesLoading: true,
  channels: []
};

function update(state = initialState, action) {
  switch (action.type) {
    case constants.CHANNELS_RECEIVED: {
      const channels = action.channels;
      const selectedChannel = channels.find(c => c.selected);

      for (let [key, channel] of channels) {
        channel.key = key;
      }

      state.channels = channels;
      state.selectedChannel = selectedChannel;
      state.messagesDirty = true;

      // setTimeout(this.getInstance().getMessages, 100);

      return state;
    }

    case constants.CHANNELS_FAILED: {
      /**/
      return state;
    }

    case constants.MESSAGES_RECEIVED: {
      for (let channel of state.channels) {
        channel.selected = false;
      }

      const selectedChannel = action.selectedChannel;
      selectedChannel.selected = true;

      state.selectedChannel = selectedChannel;
      state.messagesDirty = true;

      // setTimeout(this.getInstance().getMessages, 100);
      return state;
    }

    case constants.MESSAGES_FAILED: {
      const messages = action.messages;

      for (let [key, message] of messages) {
        message.key = key;
      }

      state.messages = messages;
      state.messagesLoading = false;

      return state;
    }

    case constants.CHANNELS_OPENED: {
      /**/
      return state;
    }

    case constants.MESSAGES_LOADING: {
      state.messagesLoading = true;
      return state;
    }

    case constants.SEND_MESSAGE: {
      state.message = action.message;
      // setTimeout(this.getInstance().sendMessage, 10);
      return state;
    }

    case constants.MESSAGE_SEND_SUCCESS: {
      /**/
      return state;
    }

    case constants.MESSAGE_SEND_ERROR: {
      /**/
      return state;
    }

    case constants.MESSAGE_RECEIVED: {
      const message = action.message;
      state.messages[message.key] = message;
      return state;
    }

    case constants.LOGIN: {
      state.user = action.user;
      return state;
    }

    default:
      return state;
  }
}

// TODO: use combine

export default update;
