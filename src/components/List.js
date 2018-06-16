import React, { Component } from 'react';
import * as firebase from 'firebase';
import { styles }  from '../public/styles';
import { View, AlertIOS, Slider, Text, TouchableHighlight } from 'react-native';

export default class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      error: {},
      email: '',
      password: '',
    }
    this.itemsRef = firebaseApp.database().ref();
  }

  componentDidMount(){
    this.listenForItems(this.itemsRef)
  }

  listenForItems(itemsRef){
    itemsRef.on('value', (snap) => {
      let items = []
      snap.forEach(item => {
        items.push({ title: item.val().title, _key: item.key })
      })
      this.setState({ items })
    })
  }

  _renderItem(item){

    const onPress = () => {
      console.log(item)
      AlertIOS.prompt(
        'Remove a Member',
        null,
        [
          {text: 'Remove', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancel')}
        ],
        'default'
      );
    }

    return <ListItem key={item._key} item={item} onPress={onPress} />

  };

  addItem(){
    AlertIOS.prompt(
      'Add a New Member',
      null,
      [ 
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ text })
          }
        }
      ],
      'plain-text'
    );
  }

  getValue(val){
    console.log(val)
  }

  render() {
    console.log(this.state.items)
    const { items } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar title='Check Me Out'/>
        <View style={styles.listview}>
          {/* { items.map(item => this._renderItem(item) )} */}
          <Slider onValueChange={this.getValue.bind(this)}/>
          <TouchableHighlight onPress={this.props.onPress}>
            <Text> Submit </Text>
          </TouchableHighlight>
        </View>
        <ActionButton title='Add' onPress={this.addItem.bind(this)}/>
      </View>
    );
  }
};