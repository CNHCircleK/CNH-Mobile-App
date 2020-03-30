import React, { Component } from 'react';
import { Text, View, FlatList, Picker, StyleSheet, TouchableOpacity,
        SafeAreaView, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';
import Res from '@resources';
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore'

import { decode, encode } from 'base-64'
global.crypto = require("@firebase/firestore");
global.crypto.getRandomValues = byteArray => { for (let i = 0; i < byteArray.length; i++) { byteArray[i] = Math.floor(256 * Math.random()); } }

if (!global.btoa) { global.btoa = encode; }

if (!global.atob) { global.atob = decode; }

// Initialize Firebase
const firebaseConfig = {
  apiKey: "",
  databaseURL: "https://cnh-mobile-app-57295.firebaseio.com/",
  projectId: "cnh-mobile-app-57295"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

/* Displays schedule of events */
export default class SchedulePage extends Component {
    state = {
        scheduleDay: Res.scheduleDays[0].value,
        scheduleData: Res.schedule.filter(event => event.day === Res.scheduleDays[0].value)
    }

    /**
     * Initially show events based on "current day" (Event Day 1, 2, or 3) tracked in AsyncStorage,
     * defaulting to Day 1
     */
    async componentWillMount() {
        try {
            const day = await AsyncStorage.getItem('Schedule_Day');
            if (day !== null) {
                this.updateDay(day);
            }
        } catch (error) {
            console.error(error);
        }
        try {
            const snapshot  = await db.collection('SchedulePage').get();
            const collection = [];
            snapshot.forEach(doc => {
              var data = doc.data();
              collection.push(data);
            });
            return collection;
         } catch (error) {
           console.error(error);
         }
    }

    /**
     * Update the day and events shown when the day-picker is updated,
     * asynchronously attempt to push this update to AsyncStorage too
     */
    updateDay(day) {
        this.setState({
            scheduleDay: day,
            scheduleData: Res.schedule.filter(event => event.day === day)
        });

        (async () => {
            try {
                await AsyncStorage.setItem('Schedule_Day', day);
            } catch (error) {
                console.error(error);
            }
        })();
    }

    /**
     * Customize FlatList row rendering here
     * (e.g. control opacity and chevron display if a sub-detail page exists for the event)
     */
    getEventRender(item) {
        return (
            <TouchableOpacity style={styles.eventRow} activeOpacity={Res.scheduleDetails[item.id] ? 0.2 : 1} onPress={() => this.handleRowPress(item)}>
                <View style={styles.eventData}>
                    <Text style={styles.eventNameText}>{item.title}</Text>
                    <Text style={styles.eventTimeLocationText}>{item.time + " \u00B7 " + item.location}</Text>
                </View>
                <View style={styles.eventChevron}>
                    {Res.scheduleDetails[item.id] && <Icon name='ios-arrow-forward' size={24} color={'white'} />}
                </View>
            </TouchableOpacity>
        );
    }

    /**
     * On press, navigate to event info page (if it exists for the item clicked)
     */
    handleRowPress(item) {
        const scheduleDetails = Res.scheduleDetails[item.id];
        if (scheduleDetails) {
            this.props.navigation.navigate('ScheduleDetail', {title: scheduleDetails.title, data: scheduleDetails.data})
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Schedule</Text>
                </View>
                <View style={styles.pickerContainer}>
                    <RNPickerSelect
                        value={this.state.scheduleDay}
                        style={Platform.OS === 'ios' ? pickerStyleiOS : pickerStyleAndroid}
                        onValueChange={(itemValue) => this.updateDay(itemValue)}
                        items={Res.scheduleDays.map(day => ({ label: day.title, value: day.value }))}
                        placeholder={{}}

                        Icon={Platform.OS === 'android' ? undefined : (() => {
                          return <Icon name='md-arrow-dropdown' size={24} color="gray" />;
                        })}
                       >
                    </RNPickerSelect>
                </View>
                <FlatList
                    data={this.state.scheduleData}
                    renderItem={({ item }) => this.getEventRender(item)}
                    keyExtractor={item => item.id}
                    extraData={this.state}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1d32'
    },
    header: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Musket-Bold',
        color: '#ffffff'
    },
    eventRow: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15
    },
    eventIconBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    eventIcon: {
        color: "#ffffff"
    },
    eventData: {
        flex: 5,
        justifyContent: 'center'
    },
    eventNameText: {
        fontSize: 16,
        fontFamily: 'Cabin-Bold',
        color: "#ffffff",
        marginBottom: 5
    },
    eventTimeLocationText: {
        fontSize: 12,
        fontFamily: 'Cabin-Regular',
        color: '#fefefe',
        opacity: 0.7
    },
    eventChevron: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pickerContainer: {
        backgroundColor: "#ffffff",
        marginLeft: 15,
        marginRight: 15
    }
});

const pickerStyleiOS = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#000000',
    paddingRight: 30,
    fontFamily: 'Cabin-Regular',

  },
  iconContainer: {
  top: 10,
  right: 20,
  alignItems: 'center',
  justifyContent: 'center',

  },
});

const pickerStyleAndroid = StyleSheet.create({
  inputAndroid: {
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Cabin-Regular'
  },
});
