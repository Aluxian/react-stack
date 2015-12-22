import React, {Component, PropTypes} from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import {connect} from 'react-redux';
import actions from '../actions';

class Chat extends Component {
  static propTypes = {
    user: PropTypes.object,
    channels: PropTypes.arrayOf(PropTypes.object.isRequired),
    messages: PropTypes.arrayOf(PropTypes.object.isRequired),
    messagesLoading: PropTypes.bool
  }

  static willTransitionTo(transition) {
    if (!this.props.user) {
      transition.redirect('/login');
    }
  }

  render() {
    return (
      <div>
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
          <ChannelList channels={this.props.channels} channelOpened={actions.channelOpened} />
          <MessageList messages={this.props.messages} messagesLoading={this.props.messagesLoading} />
        </div>
        <MessageBox sendMessage={actions.sendMessage} />
      </div>
    );
  }
}

// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    user: state.user,
    channels: state.channels || [],
    messages: state.messages || [],
    messagesLoading: state.messagesLoading != undefined ? state.messagesLoading : true
  };
}

export default connect(select)(Chat);
