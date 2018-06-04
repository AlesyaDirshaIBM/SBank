import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

export default class Departments extends Component {

  navigate(routeName) {
    this.props.navigator.push({ 
      screen: routeName 
    });
  }

  back() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <Image source={require('./images/wall.jpg')} style={styles.backgroundImage}>
        <TouchableHighlight style={styles.fullWidthButton} underlayColor = {'transparent'} onPress={this.navigate.bind(this, 'Credit')}>
          <Text style={styles.fullWidthButtonText}>Credit Department</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.fullWidthButton} underlayColor = {'transparent'} onPress={this.navigate.bind(this, 'It')}>
          <Text style={styles.fullWidthButtonText}>IT Department</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.fullWidthButton} underlayColor = {'transparent'} onPress={this.navigate.bind(this, 'Legal')}>
          <Text style={styles.fullWidthButtonText}>Legal Department</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.button} underlayColor = {'transparent'} onPress={this.navigate.bind(this, 'Home')}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </Image>
    )
  }
};

var paddingLeft = 15;


var styles = StyleSheet.create({
  fullWidthButton: {
    backgroundColor: 'white',
    height:70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullWidthButtonText: {
    fontSize:24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 5,
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
