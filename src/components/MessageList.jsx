import React, {Component, PropTypes} from 'react';
import firebase from '../firebase';

import Message from './Message.jsx';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import List from 'material-ui/lib/lists/list';
import CircularProgress from 'material-ui/lib/circular-progress';

class MessageList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    messages: PropTypes.object.isRequired,
    channelKey: PropTypes.string,
    onMessagesReceived: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.channelKey) {
      firebase.child('messages').child(this.props.channelKey).off('value', ::this.onSnapshot);
    }
    if (nextProps.channelKey && nextProps.isLoading) {
      firebase.child('messages').child(nextProps.channelKey).on('value', ::this.onSnapshot);
    }
  }

  componentWillUnmount() {
    if (this.props.channelKey) {
      firebase.child('messages').child(this.props.channelKey).off('value', ::this.onSnapshot);
    }
  }

  onSnapshot(snapshot) {
    this.props.onMessagesReceived(snapshot.val());
  }

  render() {
    const messageKeys = Object.keys(this.props.messages);
    let children = null;
    let title = null;

    if (this.props.channelKey && this.props.isLoading) {
      title = (
        <CardTitle title="Messages" />
      );

      children = (
        <CircularProgress mode="indeterminate" style={{
          paddingTop: 20,
          paddingBottom: 20,
          margin: '0 auto',
          display: 'block',
          width: '60px'
        }} />
      );
    } else if (messageKeys.length) {
      title = (
        <CardTitle title="Messages" />
      );

      const messages = this.props.messages;
      children = messageKeys.map(key => {
        const message = messages[key];
        return (
          <Message {...message} key={key} />
        );
      });
    } else {
      title = (
        <CardTitle title="Messages" subtitle="No messages." />
      );
    }

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: 30
      }}>
        {title}
        <List>
          {children}
        </List>
      </Card>
    );
  }
}

export default MessageList;
