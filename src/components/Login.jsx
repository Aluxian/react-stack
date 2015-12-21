import React from 'react';
import {Card, CardText, RaisedButton} from 'material-ui';
import actions from '../actions';

class Login extends Component {

  onClick() {
    actions.login(this.context.router);
  }

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  render(){
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
          display: 'block',
        }} onClick={::this.onClick}
        label="Log in with Google" primary={true} />
      </Card>
    );
  }
}

export default Login;
