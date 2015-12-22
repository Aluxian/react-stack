import React, {Component, PropTypes} from 'react';
// import {connect} from 'react-redux';
import mui from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();
const Colors = mui.Styles.Colors;
const AppBar = mui.AppBar;

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  constructor() {
    super();

    ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Color: Colors.pink400
    });
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <AppBar title="Tarkan's Awesome Chat App" />
        {this.props.children}
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
// function select(state) {
//   return state;
// }

export default App;
