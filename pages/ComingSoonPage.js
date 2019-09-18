import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

export default class ComingSoonPage extends Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../resources/comingsoonpage/sign.png')} style={styles.sign}>
                    <Text style={styles.comingSoonText}>Coming Soon</Text>
                </ImageBackground> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14314d'
    },
    sign: {
        position: 'relative',
        left: 50,
        width: 300,
        height: 500
    },
    comingSoonText: {
        marginTop: 80,
        marginLeft: 15,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#14314d',
        transform: [{ rotate: '345deg' }]
    }
});