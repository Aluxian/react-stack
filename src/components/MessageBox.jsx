import React, {Component, PropTypes} from 'react';
import {Card} from 'material-ui';
import rebase from '../rebase';
import trim from 'trim';

class MessageBox extends Component {
  static propTypes = {
    channelKey: PropTypes.string,
    user: PropTypes.object.isRequired
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

  onKeyDown(event) {
    if (event.keyCode === 13 && trim(event.target.value) != '') {
      event.preventDefault();
      if (this.props.channelKey) {
        rebase.push(`messages/${this.props.channelKey}`, {
          data: {
            body: this.state.message,
            author: {
              name: this.props.user.google.displayName,
              avatarUrl: this.props.user.google.profileImageURL
            }
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
          onKeyDown={::this.onKeyDown}
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
