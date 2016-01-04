import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import AccountForm from './AccountForm.jsx';

class Account extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <div style={{
          display: 'block',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
          <AccountForm user={this.props.user} />
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    user: state.auth.user
  };
}

const bindActions = {

};

export default connect(select, bindActions)(Account);
