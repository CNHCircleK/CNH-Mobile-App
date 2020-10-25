import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Platform, StatusBar, Switch } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { scheduleNotification, cancelScheduledNotification, sendPushNotification } from '../../utils/Notifications'
import * as Notifications from 'expo-notifications';

days = ['Friday', 'Saturday', 'Sunday'];

scheduleData = [
    {
        title: 'Committee & District Board Debrief',
        time: '1:00PM - 2:30PM',
        location: 'Zoom',
        day: 'Friday',
        id: 0
    },
    {
        title: 'Committee & District Board Debrief',
        time: '1:00PM - 2:30PM',
        location: 'Zoom',
        day: 'Saturday',
        id: 1
    },
    {
        title: 'Committee & District Board Debrief',
        time: '1:00PM - 2:30PM',
        location: 'Zoom',
        day: 'Sunday',
        id: 2
    },
    {
        title: 'Committee & District Board Debrief',
        time: '1:00PM - 2:30PM',
        location: 'Zoom',
        day: 'Friday',
        id: 3
    },
    {
        title: 'Committee & District Board Debrief',
        time: '1:00PM - 2:30PM',
        location: 'Zoom',
        day: 'Saturday',
        id: 4
    },
    {
        title: 'Committee & District Board Debrief',
        time: '1:00PM - 2:30PM',
        location: 'Zoom',
        day: 'Sunday',
        id: 5
    }
];

export default class FTCSchedulePage extends Component {
    state = {
        curDay: days[0],
        curScheduleData: scheduleData.filter(event => event.day === days[0]),
        scheduleMode: false,
        scheduledEvents: []
    }

    updateDay = (value) => {
        this.setState({
            curDay: value,
            curScheduleData: scheduleData.filter(event => event.day === value)
        });
    };

    renderItem = ({item}) => {
        return (
            <TouchableOpacity 
                style={this.state.scheduledEvents.some(value => value.id === item.id) ? styles.eventScheduled : styles.event} 
                onPress={ () => this.eventPress(item) }
            >
                <Text style={styles.eventTitle}>{item.title}</Text>
                <Text style={styles.eventTimeLocation}>{item.time + " \u00B7 " + item.location}</Text>
            </TouchableOpacity>
        );
    };

    eventPress = async (item) => {
        if(this.state.scheduleMode) {
            let scheduledItemIndex = this.state.scheduledEvents.findIndex(value => value.id === item.id);

            if(scheduledItemIndex != -1) {
                await cancelScheduledNotification(this.state.scheduledEvents[scheduledItemIndex].identifier);
                this.state.scheduledEvents.splice(scheduledItemIndex, 1);
                this.setState(this.state);
            } else {
                // let scheduledItemIdentifier = scheduleNotification({
                //     title: `${item.title} is happening now!`,
                //     body: `${item.time} on ${item.location}`
                // }, {
                //     seconds: 10
                // });
                let scheduledItemIdentifier = await Notifications.scheduleNotificationAsync({
                    content: {
                        title: `${item.title} is happening now!`,
                        body: `${item.time} on ${item.location}`
                    },
                    trigger: {
                        seconds: 1
                    }
                });
                this.setState((prevState) => ({ scheduledEvents: [...prevState.scheduledEvents, { identifier: scheduledItemIdentifier, id: item.id }] }));
                console.log(scheduledItemIdentifier);
                console.log(this.state.scheduledEvents);
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Schedule</Text>
                </View>
                <View style={styles.optionsContainer}>
                    <View style={styles.pickerContainer}>
                        <RNPickerSelect
                            value={this.state.curDay}
                            onValueChange={this.updateDay}
                            items={days.map(day => ({ label: day, value: day }))}
                            placeholder={{}}
                        />
                    </View>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Schedule Toggle</Text>
                        <Switch
                            style={styles.switch}
                            value={this.state.scheduleMode}
                            onValueChange={mode => this.setState({ scheduleMode: mode })}   
                        />
                    </View>
                </View>
                <FlatList
                    data={this.state.curScheduleData}
                    renderItem={this.renderItem}
                    keyExtractor={ (item, index) => index.toString() }
                />
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
        marginBottom: 20
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#E9C99C'
    },
    optionsContainer: {
        flexDirection: 'row',
        marginBottom: 5
    },
    pickerContainer: {
        flex: 4,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    switchContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    switchText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    switch: {
        marginTop: 5
    },
    event: {
        paddingVertical: 10,
        paddingLeft: 10,
        marginVertical: 5,
        borderRadius: 10
    },
    eventScheduled: {
        paddingVertical: 10,
        paddingLeft: 10,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: '#E3AEA8',
        borderWidth: 1
    },
    eventTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#E9C99C'
    },
    eventTimeLocation: {
        fontSize: 12,
        color: '#E9C99C'
    }
});