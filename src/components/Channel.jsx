import React, {Component, PropTypes} from 'react';
import {ListItem} from 'material-ui';

class Channel extends Component {
  static propTypes = {
    channel: PropTypes.object.isRequired,
    channelOpened: PropTypes.func.isRequired
  }

  onClick() {
    this.props.channelOpened(this.props.channel);
  }

  render() {
    const style = {};

    if (this.props.channel.selected) {
      style.backgroundColor = '#f0f0f0';
    }

    return (
      <ListItem
        href={'/#/chat/' + this.props.channel.key}
        style={style}
        key={this.props.channel.key}
      >{this.props.channel.name}</ListItem>
    );
  }
}

export default Channel;
