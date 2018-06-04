import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Navigator
} from 'react-native';

import Home from './home';
import Departments from './departments';
import It from './IT';
import Legal from './legal';
import Credit from './credit';

class SBank extends Component {
  
  renderScene(route, navigator) {
    if(route.screen == 'Home') {
      return <Home navigator={navigator} />
    }
    if(route.screen == 'Departments') {
      return <Departments navigator={navigator} />;
    }
    if(route.screen == 'It') {
      return <It navigator={navigator} />;
    }
    if(route.screen == 'Legal') {
      return <Legal navigator={navigator} />;
    }
    if(route.screen == 'Credit') {
      return <Credit navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{screen: 'Home'}}
        renderScene={this.renderScene.bind(this)} 
      />
    )
  }
}

AppRegistry.registerComponent('SBank', () => SBank);
