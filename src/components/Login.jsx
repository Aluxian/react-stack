import React, {Component, PropTypes} from 'react';
import {Card, CardText, RaisedButton} from 'material-ui';
import {connect} from 'react-redux';
import actions from '../actions';

class Login extends Component {
  static propTypes = {
    onLogIn: PropTypes.func.isRequired
  }

  render() {
    return (
      <Card style={{
        maxWidth: '800px',
        margin: '30px auto',
        padding: '50px'
      }}>
        <CardText style={{
          textAlign: 'center'
        }}>
          To start chatting away, please log in with your Google account.
        </CardText>

        <RaisedButton style={{
          display: 'block'
        }} onClick={this.props.onLogIn} label="Log in with Google" primary />
      </Card>
    );
  }
}

const bindActions = {
  onLogIn: actions.authLoginRequest
};

export default connect(null, bindActions)(Login);
