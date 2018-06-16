import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './screens/Login';
import Secured from './screens/Secured';

class App extends Component {

  state = {
    isLoggedIn: false
  }

  render() {

    if (this.state.isLoggedIn) 
      return <Secured 
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else 
      return <Login 
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
  }

}

AppRegistry.registerComponent(App, () => App);