import React, {Component, PropTypes} from 'react';
import {Card, List, CircularProgress} from 'material-ui';
import Message from './Message.jsx';
import rebase from '../rebase';

class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    messagesLoading: PropTypes.bool.isRequired,
    messagesReceived: PropTypes.func.isRequired,
    channel: PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    if (this.rebaseRef) {
      rebase.removeBinding(this.rebaseRef);
      this.rebaseRef = null;
    }

    const channel = props.channel.name;

    this.rebaseRef = rebase.listenTo('messages/' + channel, {
      context: this,
      asArray: true,
      then: this.props.messagesReceived
    });
  }

  componentWillUnmount() {
    rebase.removeBinding(this.rebaseRef);
    this.rebaseRef = null;
  }

  render() {
    let messageNodes = null;

    if (!this.props.messagesLoading) {
      this.props.messages.map((message, i) => {
        return (<Message message={message} key={i}/>);
      });
    } else {
      messageNodes = (
        <CircularProgress mode="indeterminate" style={{
          paddingTop: 20,
          paddingBottom: 20,
          margin: '0 auto',
          display: 'block',
          width: '60px'
        }}/>
      );
    }

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: 30
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;
