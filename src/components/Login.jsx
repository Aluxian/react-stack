import React, {Component, PropTypes} from 'react';
import {Card, CardText, RaisedButton} from 'material-ui';

class Login extends Component {
  static propTypes = {
    login: PropTypes.func//.isRequired
  }

  static contextTypes = {
    router: PropTypes.func//.isRequired
  }

  onClick() {
    console.log('click');
    //this.props.login(this.context.router);
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
