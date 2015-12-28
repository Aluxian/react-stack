import React, {Component, PropTypes} from 'react';

import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';

class Message extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    const leftAvatar = (
      <Avatar src={this.props.author.avatarUrl} />
    );

    return (
      <ListItem leftAvatar={leftAvatar}>
        {this.props.body}
      </ListItem>
    );
  }
}

export default Message;
