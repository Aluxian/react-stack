import React, {Component, PropTypes} from 'react';
import {Card, List, CircularProgress} from 'material-ui';
import Message from './Message.jsx';

class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    messagesLoading: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
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
