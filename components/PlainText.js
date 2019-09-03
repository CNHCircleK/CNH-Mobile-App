import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

export default class PlainText extends Component {
    render() {
        return (
            <Text style={[styles.plainText, this.props.style]}>{this.props.children}</Text>
        );
    }
}

const styles = StyleSheet.create({
    plainText: {
        fontSize: 14,
        color: "#5c5c5c"
    }
});