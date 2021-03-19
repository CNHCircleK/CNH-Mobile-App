import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { appendSheet } from '../../utils/Firebase';
import Res from '@resources';

export default class DCONHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            school: '',
            workshops: '',
            feedback: ''
        };
    }

    sendFeedback = async () => {
        let response = await appendSheet({name: this.state.name, school: this.state.school, workshops: this.state.workshops, feedback: this.state.feedback});

        if (response === "Success") {
            Alert.alert(
                "Success!",
                "Your response was sent successfully!",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
        }
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <Image style={styles.headerImage} source={require('../../resources/DCON_2021/Images/Sammy.png')} />
                        <Text style={styles.headerIntro}>District Convention 2021</Text>
                        <Text style={styles.headerTitle}>Feedback Form</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>Name</Text>
                        <TextInput
                            style={styles.formInput}
                            multiline={true}
                            onChangeText={(text) => this.setState({name: text})}
                            value={this.state.name}
                        />
                        <Text style={styles.formTitle}>School</Text>
                        <TextInput
                            style={styles.formInput}
                            multiline={true}
                            onChangeText={(text) => this.setState({school: text})}
                            value={this.state.school}
                        />
                        <Text style={styles.formTitle}>Which workshops/professional expos did you attend?</Text>
                        <TextInput
                            style={styles.formInput}
                            multiline={true}
                            onChangeText={(text) => this.setState({workshops: text})}
                            value={this.state.workshops}
                        />
                        <Text style={styles.formTitle}>Feedback/Comments/Concerns</Text>
                        <TextInput
                            style={{...styles.formInput, height: 150}}
                            multiline={true}
                            onChangeText={(text) => this.setState({feedback: text})}
                            value={this.state.feedback}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.sendFeedback}>
                        <Text style={styles.buttonText}>SUBMIT</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        paddingTop: 100,
        paddingBottom: 25,
        paddingLeft: 25,
        backgroundColor: Res.DCONColors.Polar
    },
    headerImage: {
        position: 'absolute',
        top: 40,
        right: 5,
        width: 150,
        height: 150
    },
    headerIntro: {
        fontWeight: '300',
        fontSize: 18,
        marginBottom: 10
    },
    headerTitle: {        
        fontFamily: "Coolvetica",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "left",
        letterSpacing: 2,
        color: Res.DCONColors.JellyBean,
        width: 300
    },
    formContainer: {
        padding: 30
    },
    formTitle: {
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 5
    },
    formInput: {
        marginBottom: 20,
        height: 38,
        paddingTop: 10,
        paddingLeft: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.10,
        backgroundColor: 'white'
    },
    button: {
        alignSelf: 'center',
        paddingHorizontal: 50,
        paddingVertical: 8,
        marginBottom: 20,
        backgroundColor: Res.DCONColors.Gold
    },
    buttonText: {
        fontSize: 12
    }
});
