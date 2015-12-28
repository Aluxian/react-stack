import React, {Component, PropTypes} from 'react';

import ListItem from 'material-ui/lib/lists/list-item';

class Channel extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    const style = {};

    if (this.props.selected) {
      style.backgroundColor = '#f0f0f0';
    }

    return (
      <ListItem primaryText={this.props.name} style={style} onClick={this.props.onClick} />
    );
  }
}

export default Channel;
