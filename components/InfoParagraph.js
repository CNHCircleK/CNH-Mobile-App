import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class InfoParagraph extends Component {
    render() {
        return (
            <Text style={styles.paragraph}>
                {this.props.children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: 'Cabin-Regular',
    color: "#fefefe",
    fontSize: 18
  }
});