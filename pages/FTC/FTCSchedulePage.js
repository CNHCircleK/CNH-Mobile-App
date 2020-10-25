import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Platform, StatusBar, Switch } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { scheduleNotification, cancelScheduledNotification } from '../../utils/Notifications'

days = ['Friday', 'Saturday', 'Sunday'];

scheduleData = [
    {
        title: 'Committee & District Board Debrief',
        time: '1:00PM - 2:30PM',
        location: 'Zoom',
        day: 'Friday',
        date: new Date('November 6, 2020 13:00:00'),
        id: 0
    },
    {
        title: 'MD&E Social: Countdown to FTC',
        time: '2:30PM - 3:30PM',
        location: 'Zoom',
        day: 'Friday',
        date: new Date('November 6, 2020 14:30:00'),
        id: 1
    },
    {
        title: 'Opening Session',
        time: '3:30PM - 4:30PM',
        location: 'Youtube Live',
        day: 'Friday',
        date: new Date('November 6, 2020 15:30:00'),
        id: 2
    },
    {
        title: 'Memory Making Session I',
        time: '4:35PM - 5:25PM',
        location: 'Zoom',
        day: 'Friday',
        date: new Date('November 6, 2020 16:35:00'),
        id: 3
    },
    {
        title: 'Service Project',
        time: '5:30PM - 7:00PM',
        location: 'Zoom',
        day: 'Friday',
        date: new Date('November 6, 2020 17:30:00'),
        id: 4
    },
    {
        title: 'Intermission',
        time: '7:00PM - 8:00PM',
        location: '',
        day: 'Friday',
        date: new Date('November 6, 2020 19:00:00'),
        id: 5
    },
    {
        title: 'Workshop Session I',
        time: '8:00PM - 8:45PM',
        location: 'Zoom',
        day: 'Friday',
        date: new Date('November 6, 2020 20:00:00'),
        id: 6
    },
    {
        title: 'DJ Introduction',
        time: '8:45PM - 8:55PM',
        location: 'Youtube Live',
        day: 'Friday',
        date: new Date('November 6, 2020 20:45:00'),
        id: 7
    },
    {
        title: 'Workshop Session II',
        time: '8:55PM - 9:40PM',
        location: 'Zoom',
        day: 'Friday',
        date: new Date('November 6, 2020 20:55:00'),
        id: 8
    },
    {
        title: 'DJ Intermission',
        time: '9:40PM - 9:50PM',
        location: 'Youtube Live',
        day: 'Friday',
        date: new Date('November 6, 2020 21:40:00'),
        id: 9
    },
    {
        title: 'Workshop Session III',
        time: '9:50PM - 10:35PM',
        location: 'Zoom',
        day: 'Friday',
        date: new Date('November 6, 2020 21:50:00'),
        id: 10
    },
    {
        title: 'General Session I',
        time: '12:00PM - 1:00PM',
        location: 'Youtube Live',
        day: 'Saturday',
        date: new Date('November 7, 2020 12:00:00'),
        id: 11
    },
    {
        title: 'Memory Making Session II',
        time: '1:05PM - 1:55PM',
        location: 'Zoom',
        day: 'Saturday',
        date: new Date('November 7, 2020 13:05:00'),
        id: 12
    },
    {
        title: 'DJ Intermission',
        time: '1:55PM - 2:05PM',
        location: 'Youtube Live',
        day: 'Saturday',
        date: new Date('November 7, 2020 13:55:00'),
        id: 13
    },
    {
        title: 'Workshop Session I',
        time: '2:05PM - 2:50PM',
        location: 'Zoom',
        day: 'Saturday',
        date: new Date('November 7, 2020 14:05:00'),
        id: 14
    },
    {
        title: 'DJ Intermission',
        time: '2:50PM - 3:00PM',
        location: 'Youtube Live',
        day: 'Saturday',
        date: new Date('November 7, 2020 14:50:00'),
        id: 15
    },
    {
        title: 'Workshop Session II',
        time: '3:00PM - 3:45PM',
        location: 'Zoom',
        day: 'Saturday',
        date: new Date('November 7, 2020 15:00:00'),
        id: 16
    },
    {
        title: 'Intermission (DJ Intermission)',
        time: '3:45PM - 4:45PM',
        location: 'Youtube Live',
        day: 'Saturday',
        date: new Date('November 7, 2020 15:45:00'),
        id: 17
    },
    {
        title: 'Message from LTGs to Returning Members',
        time: '4:45PM - 5:15PM',
        location: 'Youtube Live',
        day: 'Saturday',
        date: new Date('November 7, 2020 16:45:00'),
        id: 18
    },
    {
        title: 'General Session II',
        time: '5:15PM - 7:15PM',
        location: 'Youtube Live',
        day: 'Saturday',
        date: new Date('November 7, 2020 17:15:00'),
        id: 19
    },
    {
        title: 'Campfire Skits & Talent Acts',
        time: '7:15PM - 8:30PM',
        location: 'Youtube Live',
        day: 'Saturday',
        date: new Date('November 7, 2020 19:15:00'),
        id: 20
    },
    {
        title: 'Divisional Bonding',
        time: '8:30PM - 9:30PM',
        location: 'Zoom',
        day: 'Saturday',
        date: new Date('November 7, 2020 20:30:00'),
        id: 21
    },
    {
        title: 'Night Activities',
        time: '9:30PM - 12:00AM',
        location: 'Zoom',
        day: 'Saturday',
        date: new Date('November 7, 2020 21:30:00'),
        id: 22
    },
    {
        title: 'Closing Session ',
        time: '12:00PM',
        location: 'Youtube Live',
        day: 'Sunday',
        date: new Date('November 8, 2020 12:00:00'),
        id: 23
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
                let scheduledItemIdentifier = await scheduleNotification({
                    title: `${item.title} is happening now!`,
                    body: `${item.time} on ${item.location}`
                }, new Date('October 24, 2020 21:50:30'));

                this.setState((prevState) => ({ scheduledEvents: [...prevState.scheduledEvents, { identifier: scheduledItemIdentifier, id: item.id }] }));
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