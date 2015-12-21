import React, {Component, PropTypes} from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import actions from '../actions';

class Chat extends Component {
  static propTypes = {
    user: PropTypes.object,
    messages: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    messagesLoading: PropTypes.bool.isRequired,
    channels: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
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
          <ChannelList channels={this.props.channels} />
          <MessageList messagesLoading={this.props.messagesLoading} />
        </div>
        <MessageBox />
      </div>
    );
  }
}

// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    user: state.user,
    messages: state.messages,
    messagesLoading: state.messagesLoading,
    channels: state.channels,
    channelOpened: actions.channelOpened
  };
}

export default connect(select)(Chat);
