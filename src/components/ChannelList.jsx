import React, {Component} from 'react';
import {Card, List, CircularProgress} from 'material-ui';
import Channel from './Channel.jsx';

class ChannelList extends Component {
  static propTypes = {
    channels: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    channelOpened: PropTypes.func.isRequired,
    startListenForChannels: PropTypes.func.isRequired,
    stopListenForChannels: PropTypes.func.isRequired
  }

  componentDidMount() {
    // send action to download channels from firebase
  }

  componentWillUnmount() {

  }

  render() {
    if (!this.props.channels.length) {
      return (
        <Card style={{
          flexGrow: 1
        }}>
          <CircularProgress
            mode="indeterminate"
            style={{
              paddingTop: '20px',
              paddingBottom: '20px',
              margin: '0 auto',
              display: 'block',
              width: '60px'
            }}
          />
        </Card>
      );
    }

    const channelNodes = this.props.channels.map((channel, i) => {
      return (<Channel channel={channel} key={i} channelOpened={this.props.channelOpened} />);
    });

    return (
      <Card style={{
        flexGrow: 1
      }}>
        <List>
          {channelNodes}
        </List>
      </Card>
    );
  }
}

export default ChannelList;
