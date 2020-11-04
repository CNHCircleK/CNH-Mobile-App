import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, Platform, StatusBar, SafeAreaView, ImageBackground, Alert } from 'react-native';
import { sendPushNotification } from '../../utils/Notifications'
import { sendData, getData } from '../../utils/Firebase';
import Res from '@resources';
import { HeaderBackButton } from '@react-navigation/stack';

export default class FTCAdminPage extends Component {
    state = {
        title: '',
        body: ''
    };

    onChangeTitle = (nTitle) => this.setState({ title: nTitle });

    onChangeBody = (nBody) => this.setState({ body: nBody });

    sendAnnouncement = async () => {
        await sendData('ftc-announcements', { title: this.state.title, body: this.state.body, timestamp: new Date() });
        let tokens = await getData('expo-tokens');
        let sendResults = await Promise.all(tokens.map(async (token) => await sendPushNotification(token.token, this.state.title, this.state.body)));

        if(sendResults.some(value => !value)) {
            Alert.alert(
                "Failure!",
                "Some announcements not sent successfully :(",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        } else {
            Alert.alert(
                "Success!",
                "All announcements sent successfully!",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
    };

    sendShoutout = async () => {
        await sendData('ftc-shoutouts', { title: this.state.title, body: this.state.body, timestamp: new Date() });
        let tokens = await getData('expo-tokens');
        tokens.forEach(async (token) => await sendPushNotification(token.token, this.state.title, this.state.body));
        let sendResults = await Promise.all(tokens.map(async (token) => await sendPushNotification(token.token, this.state.title, this.state.body)));

        if(sendResults.some(value => !value)) {
            Alert.alert(
                "Failure!",
                "Some shoutouts not sent successfully :(",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
            this.setState({ notifResult: 'Some shoutouts not sent successfully :(' });
            console.log("Some shoutouts not sent successfully :(");
        } else {
            Alert.alert(
                "Success!",
                "All shoutouts sent successfully!",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderBackButton tintColor='#fefefe' onPress={() => this.props.navigation.goBack(null)} />
                <ImageBackground source={require('../../resources/ftc2020/images/bluelightsbackground.gif')} style={styles.image}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Admin Station</Text>
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.scrollView}
                        showsVerticalScrollIndicator={false}
                    >
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
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: Res.FTCColors.BlueLightsBackground
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        height: "140%"
    },
    scrollView: {
        padding: 16
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    titleText: {
        fontFamily: 'Gilberto',
        fontSize: 100,
        color: '#E9C99C',
        backgroundColor: Res.FTCColors.BlueLightsBackground
    },
    messageContainer: {
        marginBottom: 5,
        backgroundColor: Res.FTCColors.BlueLightsBackground
    },
    messageText: {
        fontFamily: 'Arbutus-Slab',
        fontSize: 14,
        color: '#E9C99C'
    },
    textInput: {
        height: 24,
        borderBottomColor: '#E3AEA8',
        borderBottomWidth: 1,
        color: '#E9C99C',
        marginBottom: 5,
        fontFamily: 'Arbutus-Slab'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: Res.FTCColors.BlueLightsBackground
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Res.FTCColors.TeaGreen,
        marginVertical: 10,
        padding: 20,
        borderRadius: 10
    },
    buttonText: {
        fontFamily: 'French-Press',
        fontSize: 20,
        color: '#704346'
    },
    resultText: {
        textAlign: 'center',
        fontFamily: 'Arbutus-Slab',
        color: '#E9C99C',
        marginBottom: 40
    }
});
