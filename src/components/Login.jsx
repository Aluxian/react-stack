import React, {Component, PropTypes} from 'react';
import {Card, CardText, RaisedButton} from 'material-ui';
// import actions from '../actions';

class Login extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  onClick() {
    // firebaseRef.authWithOAuthPopup('google', (err, user) => {
    //   if (err) {
    //     return console.error(err);
    //   }
    //
    //   actions.login(user);
    //   this.props.history.pushState(null, '/chat');
    // });
  }

  render() {
    return (
      <Card style={{
        'maxWidth': '800px',
        'margin': '30px auto',
        'padding': '50px'
      }}>
        <CardText style={{
          'textAlign': 'center'
        }}>
          To start chatting away, please log in with your Google account.
        </CardText>

        <RaisedButton style={{
          display: 'block'
        }} onClick={::this.onClick} label="Log in with Google" primary />
      </Card>
    );
  }
}

export default Login;
