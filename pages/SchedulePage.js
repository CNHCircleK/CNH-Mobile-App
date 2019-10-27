import React, { Component } from 'react';
import { Text, View, FlatList, Picker, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Res from '@resources';
import { AsyncStorage } from 'react-native';

export default class SchedulePage extends Component {
    state = {
        scheduleDay: "1",
        scheduleData: Res.schedule.filter(event => event.day === "1")
    }

    async componentWillMount() {
        try {
            const day = await AsyncStorage.getItem('Schedule_Day');
            if (day !== null) {
                this.setState({ scheduleDay: day })
            }
        } catch (error) {
            console.error(error);
        }
    }
    
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
    
    getEventRender(item) {
        return (
            <View style={styles.eventRow}>
                <View style={styles.eventIconBox}>
                    <Icon style={styles.eventIcon} name='md-information-circle' size={24} color={'black'} />
                </View>
                <View style={styles.eventData}>
                    <Text style={styles.eventNameText}>{item.title}</Text>
                    <Text style={styles.eventTimeLocationText}>{item.time + " \u00B7 " + item.location}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Schedule</Text>
                </View>
                <Picker
                    selectedValue={this.state.scheduleDay}
                    style={{ backgroundColor: '#ffffff', color: '#000000', alignItems: 'center', fontFamily: 'Musket-Regular' }}
                    onValueChange={(itemValue) => { this.updateDay(itemValue) }}>
                    <Picker.Item label="Day 1" value="1" />
                    <Picker.Item label="Day 2" value="2" />
                    <Picker.Item label="Day 3" value="3" />
                </Picker>
                <FlatList
                    data={this.state.scheduleData}
                    renderItem={({ item }) => this.getEventRender(item)}
                    keyExtractor={item => item.id}
                    extraData={this.state}
                />
            </View>
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
        paddingBottom: 10
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
        flex: 4,
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
    }
});