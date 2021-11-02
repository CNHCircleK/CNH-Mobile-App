import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { sendPushNotification } from '../../utils/Notifications'
import { sendData, getData } from '../../utils/Firebase';
import Res from '@resources';

export default class FTCAdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    sendAnnouncement = async () => {
        await sendData('ftc21-announcements', { title: this.state.title, body: this.state.body, author: this.state.author, timestamp: new Date() });
        let tokens = await getData('expo-tokens');
        let sendResults = await Promise.all(tokens.map(async (token) => await sendPushNotification(token.token, this.state.title, this.state.body)));

        if(sendResults.some(value => !value)) {
            Alert.alert(
                "Failure!",
                "Some announcements not sent successfully :(",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
        } else {
            Alert.alert(
                "Success!",
                "All announcements sent successfully!",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        {/* <Image style={styles.headerImage} source={require('../../resources/DCON_2021/Images/approvedlogo.png')} /> */}
                        <Text style={styles.headerIntro}>FALL TRAINING CONFERENCE 2021</Text>
                        <Text style={styles.headerTitle}>Administrator</Text>
                    </View>
                    <View style={styles.formContainer}>
                    <Text style={styles.formTitle}>Author</Text>
                        <TextInput
                            style={styles.formInput}
                            multiline={true}
                            onChangeText={(text) => this.setState({author: text})}
                            value={this.state.author}
                        />
                        <Text style={styles.formTitle}>Title</Text>
                        <TextInput
                            style={styles.formInput}
                            multiline={true}
                            onChangeText={(text) => this.setState({title: text})}
                            value={this.state.title}
                        />
                        <Text style={styles.formTitle}>Body</Text>
                        <TextInput
                            style={styles.formInput}
                            multiline={true}
                            onChangeText={(text) => this.setState({body: text})}
                            value={this.state.body}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.sendAnnouncement}>
                        <Text style={styles.buttonText}>SEND</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Res.FTCColors.Darpz
    },
    header: {
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingTop: 50,
        paddingBottom: 20,
        paddingLeft: 30,
        marginBottom: 10,
        backgroundColor: Res.FTCColors.Darpz,
        borderColor: Res.FTCColors.Grabt,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    headerImage: {
        position: 'absolute',
        top: 40,
        right: 5,
        width: 150,
        height: 150
    },
    headerIntro: {
        fontFamily: "SpaceGroteskBold",
        letterSpacing: 3.55,
        color: Res.FTCColors.Eggshell
    },
    headerTitle: {        
        fontFamily: "Facultad",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "left",
        color: Res.FTCColors.Yellop,
        paddingTop: 10,
        marginLeft: -1.5,
        letterSpacing: -1.5
    },
    formContainer: {
        padding: 30
    },
    formTitle: {
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 5,
        fontFamily: "SpaceGroteskBold",
        letterSpacing: 3.55,
        color: Res.FTCColors.Eggshell,
    },
    formInput: {
        marginBottom: 20,
        height: 38,
        paddingTop: 10,
        paddingLeft: 10,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.10,
        backgroundColor: Res.FTCColors.Eggshell,
    },
    button: {
        alignSelf: 'center',
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: Res.FTCColors.Yellop,
        borderRadius: 4
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Facultad'
    }
});