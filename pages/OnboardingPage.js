import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PlainButton from '../components/PlainButton';
import PlainText from '../components/PlainText';
import Res from '@resources';

export default class OnboardingPage extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <PlainText style={styles.introText}>i am a</PlainText>
                <PlainButton style={styles.memberButton} onPress={() => navigate('Home')}>{Res.strings.onBoarding.firstTimer}</PlainButton>
                <PlainButton style={styles.memberButton} onPress={() => navigate('Home')}>{Res.strings.onBoarding.returner}</PlainButton>
                <PlainButton style={styles.memberButton} onPress={() => navigate('Home')}>{Res.strings.onBoarding.clubPresident}</PlainButton>
                <PlainButton style={styles.memberButton} onPress={() => navigate('Home')}>{Res.strings.onBoarding.kiwanian}</PlainButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    introText: {
        marginBottom: 5
    },
    memberButton: {
        margin: 10,
        paddingTop: 0,
        paddingLeft: 0,
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
