import React, { Component } from 'react';
import { Text, View, SectionList, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

export default class SchedulePage extends Component {
    scheduleData = [
        { title: "Date 1", data: [
            { name: "Speech Speech", location: "Ballroom A", startTime: "9:00am", endTime: "10:00am" }, 
            { name: "Play Time", location: "Ballroom B", startTime: "10:00am", endTime: "11:00am" }
        ]},
        { title: "Date 2", data: [
            { name: "Breaks Galore", location: "Courtyard C", startTime: "12:00pm", endTime: "1:00pm" }, 
            { name: "Demo Demo", location: "Courtyard D", startTime: "1:00pm", endTime: "2:00pm" }
        ]},
        { title: "Date 3", data: [
            { name: "Talk Time", location: "Alley E", startTime: "3:00pm", endTime: "4:00pm" }, 
            { name: "Go Home", location: "Alley F", startTime: "4:00pm", endTime: "5:00pm" }
        ]},
        { title: "Date 1", data: [
            { name: "Speech Speech", location: "Ballroom A", startTime: "9:00am", endTime: "10:00am" }, 
            { name: "Play Time", location: "Ballroom B", startTime: "10:00am", endTime: "11:00am" }
        ]},
        { title: "Date 2", data: [
            { name: "Breaks Galore", location: "Courtyard C", startTime: "12:00pm", endTime: "1:00pm" }, 
            { name: "Demo Demo", location: "Courtyard D", startTime: "1:00pm", endTime: "2:00pm" }
        ]},
        { title: "Date 3", data: [
            { name: "Talk Time", location: "Alley E", startTime: "3:00pm", endTime: "4:00pm" }, 
            { name: "Go Home", location: "Alley F", startTime: "4:00pm", endTime: "5:00pm" }
        ]}
    ];

    getEventRender(item, index) {
        return (
            <View style={styles.eventRow} key={index}>
                <View style={styles.eventTime}>
                    <Text style={styles.eventTimeText}>{item.startTime}</Text>
                    <Text style={styles.eventTimeText}>{item.endTime}</Text>
                </View>
                <View style={styles.eventNameLocation}>
                    <Text style={styles.eventNameText}>{item.name}</Text>
                    <Text style={styles.eventLocationText}>{item.location}</Text>
                </View>
            </View>
        );
    }

    getSectionTitleRender(title) {
        return (
            <Text style={styles.sectionTitle}>{title}</Text>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Schedule of Events</Text>
                </View>
                <SectionList
                    renderItem={({ item, index, section }) => this.getEventRender(item, index)}
                    renderSectionHeader={({ section: {title} }) => this.getSectionTitleRender(title)}
                    sections={this.scheduleData}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        borderColor: "#000000",
        borderTopWidth: 2,
        borderBottomWidth: 2
    },
    headerText: {
        fontSize: 32,
        fontWeight: "bold"
    },
    eventRow: {
        flexDirection: "row",
        padding: 5,
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        backgroundColor: "#e7e7e7",
        borderRadius: 10
    },
    eventTime: {
        flex: 1,
        fontSize: 10,
        justifyContent: "center"
    },
    eventTimeText: {
        fontSize: 10,
        color: "#4c4c4c"
    },
    eventNameLocation: {
        flex: 2,
        justifyContent: "center"
    },
    eventNameText: {
        fontSize: 12,
        fontWeight: "bold"
    },
    eventLocationText: {
        fontSize: 10
    },
    sectionTitle: {
        margin: 5,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: "bold"
    }
});