import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

import HookListView from './hooks/hook-list-view';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="WebHooks Now!" />

          <h2>Here is a list of all the known hooks:</h2>

          <Divider />

          <HookListView hooks={this.props.store.hooks} />
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
