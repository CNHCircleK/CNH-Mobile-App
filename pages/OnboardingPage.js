import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PlainButton from '../components/PlainButton';
import PlainText from '../components/PlainText';

export default class OnboardingPage extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.introText}>
                    <PlainText>i am a</PlainText>
                </View>
                <PlainButton style={styles.memberButton} onPress={() => navigate("Home")}>first timer</PlainButton>
                <PlainButton style={styles.memberButton} onPress={() => navigate("Home")}>returner</PlainButton>
                <PlainButton style={styles.memberButton} onPress={() => navigate("Home")}>club president</PlainButton>
                <PlainButton style={styles.memberButton} onPress={() => navigate("Home")}>kiwanian</PlainButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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
        alignItems: "center",
        justifyContent: "center"
    }
});