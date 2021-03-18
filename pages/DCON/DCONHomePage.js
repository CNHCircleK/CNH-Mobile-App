import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { getData } from '../../utils/Firebase';
import * as firebase from 'firebase'
import 'firebase/firestore';
import Res from '@resources';

export default class DCONHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingEvents: [],
            announcements: []
        };
    }

    componentDidMount = async () => {
        let events = await getData('dcon-schedule', 'startTime', 'asc', 2, [{field: "startTime", op: ">", value: firebase.firestore.Timestamp.now()}])
        
        events.forEach((event, index) => {
            events[index].startTime = events[index].startTime.toDate();
            events[index].endTime = events[index].endTime?.toDate();
        });
        
        let announcements = await getData('dcon-announcements', 'timestamp', 'desc', 2);

        announcements.forEach((item, index) => {
            announcements[index].timestamp = announcements[index].timestamp.toDate();
        });

        this.setState({upcomingEvents: events, announcements: announcements});
    };

    renderEvent = (item) => {
        if (item.break) {
            return (
                <View style={{...styles.eventItem, borderRadius: 0}}>
                    <View style={styles.eventBreakLeft}>
                        <Image style={styles.eventBreakImage} source={require('../../resources/DCON_2021/Images/happy.png')}/>
                    </View>
                    <View style={styles.eventBreakRight}>
                        <Text style={styles.eventBreakText}>{item.title}</Text>
                    </View>
                </View>
            );
        }

        let startTime = item.startTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'});
        let endTime = item.endTime?.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})

        return (
            <View style={styles.eventItem}>
                <View style={{...styles.eventLeft, backgroundColor: item.workshop ? Res.DCONColors.VisVis : Res.DCONColors.Rajah}}>
                    <Text style={styles.eventTime}>{startTime} {endTime ? '- ' + endTime : ''}</Text>
                </View>
                <View style={styles.eventMiddle}>
                    <Text style={styles.eventTitle}>{item.title}</Text>
                    <Text style={styles.eventLocation}>{item.location}</Text>
                </View>
            </View>
        );
    };

    renderAnnouncement = (item) => {
        let date = item.timestamp.toLocaleDateString('en-US');
        let time = item.timestamp.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'});
        let timestamp = date + ' ' + time;

        return (
            <View style={styles.announcementContainer}>
                <View style={styles.announcementHeader}>
                    <Text style={styles.announcementTitle}>{item.title}</Text>
                </View>
                <Text style={styles.announcementTime}>{timestamp}</Text>
                <Text style={styles.announcementBody}>{item.body}</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <Image style={styles.headerImage} source={require('../../resources/DCON_2021/Images/approvedlogo.png')} />
                        <Text style={styles.headerIntro}>Welcome to CNH Circle K's</Text>
                        <Text style={styles.headerTitle}>District Convention 2021</Text>
                    </View>
                    <View style={styles.homeContainer}>
                        <Text style={styles.subTitle}>Upcoming Sessions</Text>
                        {this.state.upcomingEvents.map((event) => this.renderEvent(event))}
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Schedule')}>
                            <Text style={styles.buttonText}>VIEW FULL SCHEDULE</Text>
                        </TouchableOpacity>
                        <Text style={styles.subTitle}>Announcements</Text>
                        {this.state.announcements.map((item) => this.renderAnnouncement(item))}
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        paddingTop: 80,
        paddingBottom: 25,
        paddingLeft: 25,
        backgroundColor: Res.DCONColors.Polar
    },
    headerImage: {
        position: 'absolute',
        top: 40,
        right: 5,
        width: 160,
        height: 160
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
    homeContainer: {
        padding: 25
    },  
    subTitle: {
        fontFamily: 'Coolvetica',
        fontSize: 25,
        letterSpacing: 1,
        marginBottom: 10
    },
    button: {
        alignSelf: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 10,
        marginBottom: 30,
        backgroundColor: Res.DCONColors.Gold
    },
    buttonText: {
        fontSize: 12
    },
    eventItem: {
        flexDirection: 'row',
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.15,
        backgroundColor: 'white'
    },
    eventBreakLeft: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    eventBreakRight: {
        flex: 0.8,
        paddingVertical: 10,
        paddingLeft: 4,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    eventBreakImage: {
        width: 50,
        height: 50,
    }, 
    eventBreakText: {
        fontWeight: '300'
    },  
    eventLeft: {
        flex: 0.3,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    eventMiddle: {
        flex: 0.6,
        paddingLeft: 20,
        paddingVertical: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    eventRight: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    eventIcon: {
        height: 14,
        resizeMode: 'contain'
    },
    eventTime: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'
    },
    eventTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    },
    eventLocation: {
        fontStyle: 'italic',
        fontSize: 14,
        fontWeight: '300'
    },
    announcementContainer: {
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.15,
        backgroundColor: 'white'
    },
    announcementHeader: {
        backgroundColor: Res.DCONColors.Ziggurat,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 15,
        paddingLeft: 25
    },
    announcementTitle: {
        fontSize: 18,
        fontFamily: 'Coolvetica',
        letterSpacing: 0.5
    },
    announcementTime: {
        paddingLeft: 25,
        fontStyle: 'italic',
        fontWeight: '300',
        fontSize: 13,
        marginVertical: 10
    },
    announcementBody: {
        paddingLeft: 25,
        marginBottom: 20,
        marginTop: 2
    }
});
