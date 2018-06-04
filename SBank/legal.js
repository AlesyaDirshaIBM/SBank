import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

export default class Legal extends Component {

  navigate(routeName) {
    this.props.navigator.push({ 
      screen: routeName 
    });
  }

  render() {
    return (
      <Image source={require('./images/wall.jpg')} style={styles.backgroundImage}>
        <Text style={styles.text}>Legal Department</Text>
        <Image 
          style={styles.image}
          source={require('./images/Legal.png')}
        />
        <TouchableOpacity style={styles.button} underlayColor = {'transparent'} onPress={this.navigate.bind(this, 'Departments')}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </Image>
    )
  }
};

var styles = StyleSheet.create({
  image: {
    width: 330,
    height: 180,
    margin: 30
  },
  text: {
    textAlign: 'center',
    color: '#2c3e50',
    fontSize: 26,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'cover',
    padding: 20
    },
    button: {
    marginTop: 10,
    paddingVertical: 15,
    backgroundColor: '#2c3e50',
    borderRadius: 10,
    width: 280
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
    fontSize:16,
    fontWeight: 'bold'
  }
});