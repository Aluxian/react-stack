import React, {Component, PropTypes} from 'react';
import {pushPath} from 'redux-simple-router';
import {connect} from 'react-redux';

import CustomTheme from '../theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

@ThemeDecorator(ThemeManager.getMuiTheme(CustomTheme))
class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onPushPath: PropTypes.func.isRequired
  }

  redirectHandler(path) {
    return () => {
      this.props.onPushPath(path);
    };
  }

  render() {
    return (
      <div>
        <AppBar
          title="Tarkan's Awesome Chat App"
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="My Account" onClick={this.redirectHandler('/account')} />
              <MenuItem primaryText="Log out" onClick={this.redirectHandler('/logout')} />
            </IconMenu>
          }
        />
        {this.props.children}
      </div>
    );
  }
}

const bindActions = {
  onPushPath: pushPath
};

export default connect(null, bindActions)(App);
