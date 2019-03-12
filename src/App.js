/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Log in </Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Register </Text>
        </TouchableOpacity >
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#F5FCFF', 
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color:'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    alignSelf:'stretch',
    marginTop:20,
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    padding:20
},
buttonText: {
  color:'#fff',
  fontsize:18
}
});
