import {Component, PropTypes} from 'react';
import {ListItem, Avatar} from 'material-ui';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    message: PropTypes.func.isRequired
  }

  render() {
    const leftAvatar = (<Avatar src={this.props.message.profilePic} />);
    return (
      <ListItem leftAvatar={leftAvatar}>
        {this.props.message.body}
      </ListItem>
    );
  }
}

export default Message;
