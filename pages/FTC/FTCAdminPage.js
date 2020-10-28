import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Platform, StatusBar } from 'react-native';
import { sendPushNotification } from '../../utils/Notifications'
import { sendData, getData } from '../../utils/Firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default class FTCAdminPage extends Component {
    state = {
        title: '',
        body: '',
        event: '',
        question: '',
        winner: '[winner displayed here]'
    }

    onChangeTitle = (nTitle) => this.setState({ title: nTitle });

    onChangeBody = (nBody) => this.setState({ body: nBody });

    onChangeEvent = (nEvent) => this.setState({ event: nEvent });

    onChangeQuestion = (nQuestion) => this.setState({ question: nQuestion });

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

    getWinner = async () => {
        let query = [
            {
                field: 'event',
                op: '==',
                value: this.state.event
            },
            {
                field: 'question',
                op: '==',
                value: this.state.question
            }
        ];
        console.log(query);
        let winnerArr = await getData('ftc-responses', 'timestamp', 'asc', 1, query);
        if(winnerArr[0]) {
            let winner = winnerArr[0];
            this.setState({ winner: `${winner.event}\'s winner for question ${winner.question} is ${winner.name} from ${winner.school}!` });
        } else {
            this.setState({ winner: 'The specified Event or Question does not exist.' });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                    contentContainerStyle={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
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
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>Event:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={this.onChangeEvent}
                            value={this.state.event}
                        />
                    </View>
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>Question:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={this.onChangeQuestion}
                            value={this.state.question}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={this.getWinner}>
                            <Text style={styles.buttonText}>Get Winner</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.winnerText}>{this.state.winner}</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#757D84'
    },
    scrollView: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 15: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
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
        marginBottom: 5
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
        color: '#E9C99C',
        marginBottom: 5
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 30
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
    },
    winnerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#E9C99C',
        marginBottom: 20
    }
});