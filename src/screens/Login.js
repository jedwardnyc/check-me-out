import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

console.disableYellowBox = true;

export default class Login extends Component {
  constructor(props){
    super(props);
  }

  signUp(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      this.setState({ error: { code: error.code, message: error.message }})
    });
  }

  render() {
    return (
      <ScrollView style={{padding: 20}}>
          <Text 
              style={{fontSize: 27}}>
              Login
          </Text>
          <TextInput placeholder='Username' />
          <TextInput placeholder='Password' />
          <View style={{margin:7}} />
          <Button 
                  onPress={this.props.onLoginPress}
                  title="Submit"
              />
          </ScrollView>
      )
  }
};
