import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Platform, StatusBar } from 'react-native';
import { sendPushNotification } from '../../utils/Notifications'
import { sendData, getData, getOrderedData } from '../../utils/Firebase';

export default class FTCAdminPage extends Component {
    state = {
        title: '',
        body: ''
    }

    onChangeTitle = (nTitle) => this.setState({ title: nTitle });

    onChangeBody = (nBody) => this.setState({ body: nBody });

    sendAnnouncement = async () => {
        await sendData('ftc-announcements', { title: this.state.title, body: this.state.body, timestamp: new Date() });
        let tokens = await getData('expo-tokens');
        tokens.forEach(async (token) => await sendPushNotification(token.token, this.state.title, this.state.body));
    };

    sendShoutout = async () => {
        await sendData('ftc-shoutouts', { title: this.state.title, body: this.state.body, timestamp: new Date() });
        let tokens = await getData('expo-tokens');
        tokens.forEach(async (token) => await sendPushNotification(token.token, this.state.title, this.state.body));
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Admin Station</Text>
                </View>
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>Title:</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.onChangeTitle}
                        value={this.state.title}
                    />
                </View>
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>Body:</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.onChangeBody}
                        value={this.state.body}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.sendAnnouncement}>
                        <Text style={styles.buttonText}>Send Announcement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.sendShoutout}>
                        <Text style={styles.buttonText}>Send Shoutout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 15: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#757D84'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#E9C99C'
    },
    messageContainer: {
        marginBottom: 20
    },
    messageText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#E9C99C'
    },
    textInput: {
        height: 24,
        borderBottomColor: '#E3AEA8',
        borderBottomWidth: 1,
        color: '#E9C99C'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3AEA8',
        marginVertical: 10,
        padding: 20,
        borderRadius: 10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#704346'
    }
});