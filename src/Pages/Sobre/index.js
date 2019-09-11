import React, { Component } from 'react';

import { View, Image, StyleSheet, Text } from 'react-native';


export default class Sobre extends Component {
  static navigationOptions = {
    tabBarLabel: 'Sobre',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return (
          <Image source={require('../../../assets/sobre_azul.png')} style={styles.icone} />
        )
      } else {
        return (
          <Image source={require('../../../assets/sobre_preto.png')} style={styles.icone} />
        )
      }
    }
  }

  render() {
    return (
      <View >
        <Text>Home</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  icone: { width: 26, height: 26 }
});
