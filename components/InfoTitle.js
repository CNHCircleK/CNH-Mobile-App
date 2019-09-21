import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class InfoTitle extends Component {
    render() {
        return (
            <Text style={styles.title}>
                {this.props.children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Musket-Regular',
    color: "#fefefe",
    fontSize: 32,
      textShadowColor: 'black',
      textShadowOffset: {width: 2, height: 3},
      textShadowRadius: 4
  },
});
