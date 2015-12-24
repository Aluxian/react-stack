import React, {Component, PropTypes} from 'react';
import {Card} from 'material-ui';
import rebase from '../rebase';
import trim from 'trim';

class MessageBox extends Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    selectedChannel: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  onChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  onKeyUp(event) {
    if (event.keyCode === 13 && trim(event.target.value) != '') {
      event.preventDefault();
      if (this.props.selectedChannel) {
        this.props.sendMessage(this.state.message);
        rebase.push('messages/' + this.props.selectedChannel.name, {
          data: {
            message: this.state.message,
            date: new Date().toUTCString(),
            author: 'author',//,
            userId: 'uid',//state.user.uid,
            profilePic: 'profilepic'//state.user.google.profileImageURL
          }
        });
      }
      this.setState({
        message: ''
      });
    }
  }

  render() {
    return (
      <Card style={{
        maxWidth: 1200,
        margin: '30px auto',
        padding: 30
      }}>
        <textarea
          value={this.state.message}
          onChange={::this.onChange}
          onKeyUp={::this.onKeyUp}
          style={{
            width: '100%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
          }} />
      </Card>
    );
  }
}

export default MessageBox;
