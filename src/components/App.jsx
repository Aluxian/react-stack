import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/lib/app-bar';

import CustomTheme from '../theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

@ThemeDecorator(ThemeManager.getMuiTheme(CustomTheme))
class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
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
