import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

export default class OnboardingPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.intro}>
                    <Text style={styles.text}>i am a</Text>
                </View>
                <TouchableOpacity style={styles.memberButton}>
                    <Text style={styles.text}>first timer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.memberButton}>
                    <Text style={styles.text}>returner</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.memberButton}>
                    <Text style={styles.text}>club president</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.memberButton}>
                    <Text style={styles.text}>kiwanian</Text>
                </TouchableOpacity>
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
    intro: {
        marginBottom: 5
    },
    memberButton: {
        margin: 10,
        height: 50,
        width: 150,
        backgroundColor: "#e8e8e8",
        borderWidth: 2,
        borderColor: "#cccccc",
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 14,
        color: "#5c5c5c"
    }
});