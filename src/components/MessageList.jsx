import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, List, CircularProgress} from 'material-ui';
import Message from './Message.jsx';
import rebase from '../rebase';

class MessageList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    messages: PropTypes.object.isRequired,
    channelKey: PropTypes.string,
    onMessagesReceived: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (this.rebaseRef) {
      rebase.removeBinding(this.rebaseRef);
      this.rebaseRef = null;
    }
    if (nextProps.channelKey && nextProps.isLoading) {
      this.rebaseRef = rebase.listenTo(`messages/${nextProps.channelKey}`, {
        context: this,
        then(data) {
          console.log('data', data);
          this.props.onMessagesReceived(data);
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.rebaseRef) {
      rebase.removeBinding(this.rebaseRef);
      this.rebaseRef = null;
    }
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
