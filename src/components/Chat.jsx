import React, {Component, PropTypes} from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import {pushPath, replacePath} from 'redux-simple-router';
import {connect} from 'react-redux';
import actions from '../actions';

class Chat extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
      data: PropTypes.object.isRequired
    }).isRequired,
    channels: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
      data: PropTypes.object.isRequired
    }).isRequired,
    params: PropTypes.object.isRequired,
    onChannelsReceived: PropTypes.func.isRequired,
    onMessagesReceived: PropTypes.func.isRequired,
    onMessagesLoading: PropTypes.func.isRequired,
    onReplacePath: PropTypes.func.isRequired,
    onPushPath: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    const keys = Object.keys(nextProps.channels.data);
    if (keys.length && !nextProps.params.channelKey) {
      nextProps.onReplacePath(`/chat/${keys[0]}`);
    }
  }

  render() {
    const onChannelSelected = (key) => {
      this.props.onPushPath(`/chat/${key}`);
      this.props.onMessagesLoading(true);
    };

    return (
      <div>
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
          <ChannelList
            isLoading={this.props.channels.isLoading}
            channels={this.props.channels.data}
            selectedKey={this.props.params.channelKey}
            onChannelSelected={onChannelSelected}
            onChannelsReceived={this.props.onChannelsReceived} />
          <MessageList
            isLoading={this.props.messages.isLoading}
            messages={this.props.messages.data}
            channelKey={this.props.params.channelKey}
            onMessagesReceived={this.props.onMessagesReceived} />
        </div>
        <MessageBox user={this.props.user} channelKey={this.props.params.channelKey} />
      </div>
    );
  }
}

function select(state) {
  return {
    user: state.auth.user,
    messages: state.messages,
    channels: state.channels
  };
}

const bindActions = {
  onChannelsReceived: actions.channelsReceived,
  onMessagesReceived: actions.messagesReceived,
  onMessagesLoading: actions.messagesLoading,
  onReplacePath: replacePath,
  onPushPath: pushPath
};

export default connect(select, bindActions)(Chat);
