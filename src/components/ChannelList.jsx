import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, List, CircularProgress} from 'material-ui';
import Channel from './Channel.jsx';
import rebase from '../rebase';

class ChannelList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    channels: PropTypes.object.isRequired,
    onChannelSelected: PropTypes.func.isRequired,
    onChannelsReceived: PropTypes.func.isRequired,
    selectedKey: PropTypes.string
  }

  componentWillMount() {
    this.rebaseRef = rebase.listenTo('channels', {
      context: this,
      then: this.props.onChannelsReceived
    });
  }

  componentWillUnmount() {
    if (this.rebaseRef) {
      rebase.removeBinding(this.rebaseRef);
      this.rebaseRef = null;
    }
  }

  render() {
    const channelKeys = Object.keys(this.props.channels);
    let children = null;
    let title = null;

    if (this.props.isLoading) {
      title = (
        <CardTitle title="Channels" />
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
    } else if (channelKeys.length) {
      title = (
        <CardTitle title="Channels" />
      );

      const selectedKey = this.props.selectedKey || channelKeys[0];
      const channels = this.props.channels;

      children = channelKeys.map(key => {
        const onClick = () => this.props.onChannelSelected(key);
        const selected = selectedKey == key;
        const channel = channels[key];

        return (
          <Channel {...channel} key={key} onClick={onClick} selected={selected} />
        );
      });
    } else {
      title = (
        <CardTitle title="Channels" subtitle="No channels." />
      );
    }

    return (
      <Card style={{
        flexGrow: 1
      }}>
        {title}
        <List>
          {children}
        </List>
      </Card>
    );
  }
}

export default ChannelList;
