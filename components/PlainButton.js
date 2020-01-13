import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import PlainText from './PlainText';

/* Basic button */
export default class PlainButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.plainButton, this.props.style]} onPress={this.props.onPress}>
                <PlainText>{this.props.children}</PlainText>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    plainButton: {
        paddingTop: 10,
        paddingLeft: 15,
        height: 100,
        width: 150,
        backgroundColor: "#e8e8e8",
        borderWidth: 2,
        borderColor: "#cccccc",
        borderRadius: 3
    }
});