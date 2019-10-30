import React, { Component } from 'react';
import { Text, View, FlatList, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Res from '@resources';

export default class SchedulePage extends Component {
    state = {
        scheduleDay: Res.scheduleDays[0].value,
        scheduleData: Res.schedule.filter(event => event.day === "1")
    }
    
    
    getEventRender(item) {
        const workshopDetails = Res.workshopDetails[item.id];
        if (workshopDetails) {
            return (
                <TouchableOpacity style={styles.eventRow} onPress={() =>
                    this.props.navigation.navigate('ScheduleDetail', {title: workshopDetails.title, data: workshopDetails.data})}>
                    <View style={styles.eventIconBox}>
                        <Icon style={styles.eventIcon} name='md-information-circle' size={24} color={'black'} />
                    </View>
                    <View style={styles.eventData}>
                        <Text style={styles.eventNameText}>{item.title}</Text>
                        <Text style={styles.eventTimeLocationText}>{item.time + " \u00B7 " + item.location}</Text>
                    </View>
                    <View style={styles.eventRightArrow}>
                        <Icon name='md-arrow-dropright' size={24} color={'white'}/>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <View style={styles.eventRow}>
                    <View style={styles.eventIconBox}>
                        <Icon style={styles.eventIcon} name='md-information-circle' size={24} color={'black'} />
                    </View>
                    <View style={styles.eventData}>
                        <Text style={styles.eventNameText}>{item.title}</Text>
                        <Text style={styles.eventTimeLocationText}>{item.time + " \u00B7 " + item.location}</Text>
                    </View>
                    <View style={styles.eventRightArrow}>{/* Take up some space where chevron would be */}</View>
                </View>
            )
        }
    }

    handleRowPress(item) {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Schedule</Text>
                </View>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={this.state.scheduleDay}
                        style={styles.dateSelector}
                        onValueChange={(itemValue) => {
                            this.setState({
                                scheduleDay: itemValue,
                                scheduleData: Res.schedule.filter(event => event.day === itemValue)
                            });
                        }}>
                        { Res.scheduleDays.map(day => <Picker.Item label={day.title} value={day.value} />)}
                    </Picker>
                </View>
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
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    eventIcon: {
        color: "#ffffff"
    },
    eventData: {
        flex: 10,
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
    eventRightArrow: {
        flex: 1,
        alignContent: 'flex-end',
        justifyContent: 'center'
    },
    pickerContainer: {
        backgroundColor: "#ffffff"
    },
    dateSelector: {
        // backgroundColor: '#ffffff',
        color: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Musket-Regular',
    }
});