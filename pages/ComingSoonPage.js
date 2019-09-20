import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import Res from '@resources';

export default class ComingSoonPage extends Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../resources/images/ComingSoonPage/sign.png')} style={styles.sign}>
                    <Text style={styles.comingSoonText}>{Res.strings.comingSoon.comingSoon}</Text>
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
        backgroundColor: '#1a1d32'
    },
    sign: {
        position: 'relative',
        left: 50,
        width: 350,
        height: 500
    },
    comingSoonText: {
        marginTop: 80,
        marginLeft: 35,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Musket-Regular',
        color: '#14314d',
        transform: [{ rotate: '345deg' }]
    }
});