import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class InfoHeader extends Component {
    render() {
        return (
            <Text style={styles.header}>
                {this.props.children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Musket-Bold',
    color: "#fefefe",
    fontSize: 18,
    letterSpacing: 4
  }
});
