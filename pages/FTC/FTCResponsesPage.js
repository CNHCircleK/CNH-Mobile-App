import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import { sendData } from '../../utils/Firebase';
import Res from '@resources';

export default class FTCResponsesPage extends Component {
    state = {
        name: '',
        school: '',
        event: '',
        question: '',
        anwser: '',
        responseResult: '[response status displayed here]'
    };

    onChangeName = (nName) => this.setState({ name: nName });

    onChangeSchool = (nSchool) => this.setState({ school: nSchool });

    onChangeEvent = (nEvent) => this.setState({ event: nEvent });

    onChangeQuestion = (nQuestion) => this.setState({ question: nQuestion });

    onChangeAnswer = (nAnswer) => this.setState({ answer: nAnswer });

    sendInput = async () => {
        let success = await sendData('ftc-responses', { name: this.state.name, school: this.state.school, event: this.state.event.toLowerCase(), question: this.state.question.toLowerCase(), answer: this.state.answer.toLowerCase(), timestamp: new Date() });
        if(success) {
            this.setState({ answer: '', responseResult: 'Response sent successfully!' });
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../resources/ftc2020/images/bluelightsbackground.gif')} style={styles.image}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}> Responses </Text>
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.scrollView}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageText}>Name:</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={this.onChangeName}
                                value={this.state.name}
                            />
                            <Text style={styles.messageText}>School:</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={this.onChangeSchool}
                                value={this.state.school}
                            />
                            <Text style={styles.messageText}>Event:</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={this.onChangeEvent}
                                value={this.state.event}
                            />
                            <Text style={styles.messageText}>Question:</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={this.onChangeQuestion}
                                value={this.state.question}
                            />
                            <Text style={styles.messageText}>Answer:</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={this.onChangeAnswer}
                                value={this.state.answer}
                            />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={this.sendInput}>
                                    <Text style={styles.buttonText}>Send Response</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.resultText}>{this.state.responseResult}</Text>
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
        backgroundColor: Res.FTCColors.BlueLightsBackground,
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        height: "140%"
    },
    scrollView: {
        padding: 20,
        backgroundColor: Res.FTCColors.BlueLightsBackground

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
        color: '#E9C99C',
        marginTop: 10,
        marginBottom: 10
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
        marginBottom: 20
    }
});
