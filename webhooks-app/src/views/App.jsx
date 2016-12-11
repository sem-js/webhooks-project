import React from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import HookListView from './hook-list-view';

injectTapEventPlugin();

class App extends React.Component {
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
