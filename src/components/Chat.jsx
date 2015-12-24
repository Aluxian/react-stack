import React, {Component, PropTypes} from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from '../actions';
import store from '../store';

class Chat extends Component {
  static propTypes = {
    user: PropTypes.object,
    channels: PropTypes.arrayOf(PropTypes.object.isRequired),
    messages: PropTypes.arrayOf(PropTypes.object.isRequired),
    areMessagesLoading: PropTypes.bool.isRequired,
    channelOpened: PropTypes.func.isRequired,
    channelsReceived: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    messagesReceived: PropTypes.func.isRequired,
    params: PropTypes.object
  }

  static willTransitionTo(transition) {
    if (!this.props.user) {
      transition.redirect('/login');
    }
  }

  render() {
    console.log('render chat', this.props.channels, 'but', store.getState());
    const sc = this.props.channels.find(c => c.name == this.props.params.channelId);
    if (sc) {
      sc.selected = true;
    }
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
            channels={this.props.channels}
            channelOpened={this.props.channelOpened}
            channelsReceived={this.props.channelsReceived} />
          <MessageList
            messages={this.props.messages}
            messagesLoading={this.props.areMessagesLoading}
            messagesReceived={this.props.messagesReceived}
            channel={sc} />
        </div>
        <MessageBox
          sendMessage={this.props.sendMessage}
          selectedChannel={sc} />
      </div>
    );
  }
}

// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  const all = state.all;
  console.log('select', state);
  return {
    user: all.user,
    channels: all.channels || [],
    messages: all.messages || [],
    areMessagesLoading: all.messagesLoading != undefined ? all.messagesLoading : true
  };
}

export default connect(select, bindActionCreators(actions, store.dispatch))(Chat);
