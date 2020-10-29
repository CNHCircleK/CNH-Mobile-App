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
        notifResult: '[notification status displayed here]',
        winner: '[winner displayed here]'
    }

    onChangeTitle = (nTitle) => this.setState({ title: nTitle });

    onChangeBody = (nBody) => this.setState({ body: nBody });

    onChangeEvent = (nEvent) => this.setState({ event: nEvent });

    onChangeQuestion = (nQuestion) => this.setState({ question: nQuestion });

    sendAnnouncement = async () => {
        await sendData('ftc-announcements', { title: this.state.title, body: this.state.body, timestamp: new Date() });
        let tokens = await getData('expo-tokens');
        let sendResults = await Promise.all(tokens.map(async (token) => await sendPushNotification(token.token, this.state.title, this.state.body)));
        
        if(sendResults.some(value => !value)) {
            this.setState({ notifResult: 'Some announcements not sent successfully :(' });
            console.log("Some announcements not sent successfully :(");
        } else {
            this.setState({ notifResult: 'All announcements sent successfully!' });
            console.log("All announcements sent successfully!");
        }
    };

    sendShoutout = async () => {
        await sendData('ftc-shoutouts', { title: this.state.title, body: this.state.body, timestamp: new Date() });
        let tokens = await getData('expo-tokens');
        tokens.forEach(async (token) => await sendPushNotification(token.token, this.state.title, this.state.body));
        let sendResults = await Promise.all(tokens.map(async (token) => await sendPushNotification(token.token, this.state.title, this.state.body)));
        
        if(sendResults.some(value => !value)) {
            this.setState({ notifResult: 'Some shoutouts not sent successfully :(' });
            console.log("Some shoutouts not sent successfully :(");
        } else {
            this.setState({ notifResult: 'All shoutouts sent successfully!' });
            console.log("All shoutouts sent successfully!");
        }
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
                    <Text style={styles.resultText}>{this.state.notifResult}</Text>
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
                    <Text style={styles.resultText}>{this.state.winner}</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#757D84'
    },
    scrollView: {
        padding: 16
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#704346"
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
        marginBottom: 10
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
    resultText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#E9C99C',
        marginBottom: 40
    }
});