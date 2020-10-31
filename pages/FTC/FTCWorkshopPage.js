import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Platform, StatusBar } from 'react-native';
import { sendPushNotification } from '../../utils/Notifications'
import { sendData, getData } from '../../utils/Firebase';
import { ScrollView } from 'react-native-gesture-handler';

const scheduleIdToWorkshop = new Map([
    [6, 0],
    [8, 1],
    [10, 2],
    [14, 3],
    [16, 4]
])

const workshopInfo = [
    {
        title: "Workshops Session I (Friday)",
        workshops: [
            {
                title: "DSI: Serving the Environment",
                hosts: "Karishma Sira & Kristin Nguyen",
                description: "Come join your fellow CNH Circle K members in Learning about this year's District Service Initiative: Serving the Environment! The District Service Committee will be providing you all the info you need to learn about the DSI and how you can partake in it this year."
            }
        ]
    },
    {
        title: "Workshops Session II (Friday)",
        workshops: [

        ]
    },
    {
        title: "Workshops Session III (Friday)",
        workshops: [

        ]
    },
    {
        title: "Workshops Session I (Saturday)",
        workshops: [

        ]
    },
    {
        title: "Workshops Session II (Saturday)",
        workshops: [

        ]
    },
]

const defaultInfo = {
    title: "Not Found",
    workshops: []
}

export default class FTCWorkshopPage extends Component {

    render() {
        const { route, navigation } = this.props;
        const info = workshopInfo[scheduleIdToWorkshop.get(route.params.id)] || defaultInfo

        return (
            <View style={styles.container}>
                <View style={styles.title}>
                        <Text style={styles.titleText}>{info.title}</Text>
                </View>
                <ScrollView 
                    contentContainerStyle={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >   
                    { info.workshops.map(workshop => (
                        <View style={styles.workshop}>
                            <Text style={styles.workshopTitle}>{workshop.title}</Text>
                            <Text style={styles.workshopHost}>{workshop.hosts}</Text>
                            <Text style={styles.workshopDescription}>{workshop.description}</Text>
                        </View>
                    ))}

                    <TouchableOpacity style={styles.button} onPress={ () => navigation.goBack() }>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
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
        padding: 10,
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