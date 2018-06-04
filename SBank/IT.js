import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

export default class It extends Component {

  navigate(routeName) {
    this.props.navigator.push({ 
      screen: routeName 
    });
  }

  render() {
    return (
      <Image source={require('./images/wall.jpg')} style={styles.backgroundImage}>
        <Text style={styles.text}>IT Department</Text>
        <Image 
          style={styles.image}
          source={require('./images/It.png')}
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
    width: 320,
    height: 180,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: '#2c3e50',
    fontSize: 26,
    marginBottom: 3,
    fontWeight: 'bold'
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
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});