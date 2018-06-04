import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

export default class Home extends Component { 

  navigate(routeName) {
    this.props.navigator.push({ 
      screen: routeName 
    });
  }

  render() {
    return (
      <Image source={require('./images/wall.jpg')} style={styles.backgroundImage}>
        <Image 
          style={styles.image}
          source={require('./images/logo.jpg')}
        />
        <Text style={styles.text}>
          SBank is a state-owned Russian banking and financial services company{'\n'}
          headquartered in Moscow{'\n'}
          SBank has operations in several European{'\n'}
          and post-Soviet countries.
        </Text>
        <TouchableOpacity underlayColor = {'transparent'} style={styles.button} onPress={this.navigate.bind(this, 'Departments')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Image>
    )
  }
};

var paddingLeft = 15;


var styles = StyleSheet.create({
  image:{
    width: 280,
    height: 180,
    margin: 30
  },
  text:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  button: {
    marginTop: 10,
    paddingVertical: 15,
    backgroundColor: '#2c3e50',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
    fontSize:16,
    fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    padding: 20
  }
});