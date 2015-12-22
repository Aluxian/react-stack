import React, {Component, PropTypes} from 'react';
import mui, {AppBar} from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();
const Colors = mui.Styles.Colors;

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

export default App;
