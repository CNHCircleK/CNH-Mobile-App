import React, { Component } from 'react';
import { Image, View, StyleSheet, Text, FlatList, TouchableOpacity, Platform, StatusBar, Switch, SafeAreaView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { scheduleNotification, cancelScheduledNotification } from '../../utils/Notifications'
import { Ionicons } from '@expo/vector-icons';
import Res from '@resources';
import Toast from 'react-native-root-toast';

const days = ['Friday', 'Saturday', 'Sunday', 'My Events'];

const scheduleData = [
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
        memory: 0,
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
        workshop: 0,
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
        workshop: 1,
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
        workshop: 2,
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
        memory: 1,
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
        workshop: 3,
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
        workshop: 4,
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
            curScheduleData: value === days[3] ? scheduleData.filter(event => this.state.scheduledEvents.some(value => value.id === event.id)) : scheduleData.filter(event => event.day === value)
        });
    };

    toggleSwitch = (mode) => {
        this.setState({ scheduleMode: mode });
        if (mode == true){
            let toast = Toast.show('Tap an event to add it to your schedule', {
              duration: Toast.durations.SHORT,
              position: 50,
              shadow: true,
              animation: true,
              hideOnPress: true
            });
        }
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={this.state.scheduledEvents.some(value => value.id === item.id) ? styles.eventScheduled : styles.event}
                onPress={ () => this.eventPress(item) }
            >
                <View>
                    <Text style={styles.eventTitle}>{item.title}</Text>
                    <Text style={styles.eventTimeLocation}>{item.day.substring(0, 3) + " \u00B7 " + item.time + " \u00B7 " + item.location}</Text>
                </View>
                {(item.hasOwnProperty('workshop') || item.hasOwnProperty('memory')) && <Ionicons name={'ios-arrow-forward'} size={24} color={Res.FTCColors.MellowApricot} />}
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
                }, item.date);
                this.setState((prevState) => ({ scheduledEvents: [...prevState.scheduledEvents, { identifier: scheduledItemIdentifier, id: item.id }] }));
            }
        } else {
            if(item.hasOwnProperty('workshop')) {
                this.props.navigation.navigate('Schedule Details', { session: item.workshop });
            } else if(item.hasOwnProperty('memory')) {
                this.props.navigation.navigate('Team Activities', { session: item.memory });
            }
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.title}>
                    <Image style={{width: 125, height: 125}}
                        resizeMode="contain"
                        source={require('../../resources/ftc2020/images/clipboard.png')}
                    />
                    <Text style={styles.titleText}> Schedule </Text>
                </View>
                <View style={styles.optionsContainer}>
                    <View style={styles.pickerContainer}>
                        <RNPickerSelect
                            value={this.state.curDay}
                            style={pickerStyle}
                            onValueChange={this.updateDay}
                            items={days.map(day => ({ label: day, value: day }))}
                            placeholder={{}}
                        />
                    </View>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}> Edit "My Events"</Text>
                        <Switch
                            trackColor={{true: Res.FTCColors.SpanishPink,
                              false: 'grey'}}
                            thumbColor={this.state.scheduleMode ? "white" : "white"}
                            ios_backgroundColor='grey'
                            style={styles.switch}
                            value={this.state.scheduleMode}
                            onValueChange={this.toggleSwitch}
                        />
                    </View>
                </View>
                <FlatList
                    data={this.state.curScheduleData}
                    renderItem={this.renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={ (item, index) => index.toString() }
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: Res.FTCColors.TealBlue
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titleText: {
        fontFamily: "Gilberto",
        fontSize: 100,
        color: Res.FTCColors.MellowApricot,
        marginTop: -10
    },
    optionsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingTop: 16
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
        alignItems: 'center',
    },
    switchText: {
        textAlign: 'center',
        fontFamily: "Arbutus-Slab",
        color: Res.FTCColors.ScheduleText,
        opacity: 0.87
    },
    switch: {
        marginTop: 5,
    },
    event: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 15,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10
    },
    eventScheduled: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: '#E3AEA8',
        borderWidth: 1
    },
    eventTitle: {
        fontSize: 15,
        color: Res.FTCColors.ScheduleText,
        fontFamily: "Arbutus-Slab",
        opacity: 0.87
    },
    eventTimeLocation: {
        fontSize: 12,
        color: Res.FTCColors.ScheduleText,
        fontFamily: "Arbutus-Slab",
        opacity: 0.60
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

const pickerStyle = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#000000',
    paddingRight: 30,
  },
  iconContainer: {
  top: 10,
  right: 20,
  alignItems: 'center',
  justifyContent: 'center',
  },
});
