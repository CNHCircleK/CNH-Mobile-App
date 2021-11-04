import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, Modal, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { getData } from '../../utils/Firebase';
import { getTimeString } from '../../utils/Misc';
import * as firebase from 'firebase'
import 'firebase/firestore';
import Res from '@resources';

export default class FTC21HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingEvents: [],
            announcements: [],
            adminPass: '',
            modalVisible: false
        };
    }

    componentDidMount = async () => {
        await this.getEvents();
        await this.getAnnouncements();

        this.navigationListener = this.props.navigation.addListener('focus', () => {this.getAnnouncements(); this.getEvents();});
    };

    componentWillUnmount = async () => {
        this.navigationListener();
    };

    getEvents = async () => {
        let events = await getData('dcon-schedule', 'startTime', 'asc', 2, [{field: "startTime", op: ">", value: firebase.firestore.Timestamp.now()}])
        
        events.forEach((event, index) => {
            events[index].startTime = events[index].startTime.toDate();
            events[index].endTime = events[index].endTime?.toDate();
        });
        
        this.setState({upcomingEvents: events}); 
    };

    getAnnouncements = async () => {
        let announcements = await getData('ftc21-announcements', 'timestamp', 'desc', 2);

        announcements.forEach((item, index) => {
            announcements[index].timestamp = announcements[index].timestamp.toDate();
        });

        this.setState({announcements: announcements});
    };

    renderEvent = (item) => {
        if (item.break) {
            return (
                <View style={{...styles.eventItem, borderRadius: 0}}>
                    <View style={styles.eventBreakLeft}>
                        <Image style={styles.eventBreakImage} source={require('../../resources/FTC_2021/Icons/Frog_Golem.png')}/>
                    </View>
                    <View style={styles.eventBreakRight}>
                        <Text style={styles.eventBreakText}>{item.title}</Text>
                    </View>
                </View>
            );
        }

        let startTime;
        let endTime;

        if (Platform.OS === 'ios') {
            startTime = item.startTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'});
            endTime = item.endTime?.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})
        } else {
            startTime = getTimeString(item.startTime);
            endTime = item.endTime ? getTimeString(item.endTime) : undefined;
        }

        return (
            <View style={styles.eventItem}>
                <View style={{...styles.eventLeft, backgroundColor: item.workshop ? Res.FTCColors.LightPurple : Res.FTCColors.LightPurple}}>
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
        let time = Platform.OS === 'ios' ? item.timestamp.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'}) : getTimeString(item.timestamp);
        let timestamp = date + ' | ' + time + ' | ' + item.author;

        return (
            <View style={styles.announcementContainer}>
                <View style={styles.announcementHeader}>
                    <Text style={styles.announcementTitle}>{item.title}</Text>
                    <Text style={styles.announcementTime}>{timestamp}</Text>
                </View>
                <Text style={styles.announcementBody}>{item.body}</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <View style={styles.modal}>
                            <TouchableOpacity style={styles.modalCloseContainer} onPress={() => this.setState({modalVisible: false})}>
                                <Image style={styles.modalClose} source={require('../../resources/DCON_2021/Icons/exit_icon.png')} />
                            </TouchableOpacity>
                            <TextInput 
                                style={styles.formInput} 
                                onChangeText={(text) => {this.setState({adminPass: text})}}
                                value={this.state.adminPass}
                            />
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => { 
                                    if (this.state.adminPass == 'FrogGolem') {
                                        this.setState({modalVisible: false});
                                        this.props.navigation.navigate('Admin'); 
                                    }}}>
                                <Text style={styles.buttonText}>GO</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerImageContainer} onPress={() => this.setState({modalVisible: true})}>
                            <Image style={styles.headerImage} source={require('../../resources/FTC_2021/Images/Logo.png')} />
                        </TouchableOpacity>
                        <Text style={styles.headerIntro}>WELCOME ADVENTURER!</Text>
                        <Text style={styles.headerTitle}>Fall Training</Text>
                        <Text style={styles.headerTitle}>Conference 2021</Text>

                    </View>
                    <View style={styles.homeContainer}>
                        <Text style={styles.subTitle}>Your Upcoming Sessions</Text>
                        {this.state.upcomingEvents.map((event) => this.renderEvent(event))}
                        
                        <View style={styles.buttonContainer}>
                            {/* <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("ResourcesWebView", {link: 'Map'})}> */}
                            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Schedule')}>
                                <Text style={styles.buttonText}>View Map</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Schedule')}>
                                <Text style={styles.buttonText}>View Full Schedule</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.subTitle}>Announcements</Text>
                        {this.state.announcements.map((item) => this.renderAnnouncement(item))}
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Announcements')}>
                            <Text style={styles.buttonText}>See All</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Res.FTCColors.Darpz
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,
        marginHorizontal: 30,
        paddingTop: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.50,
        elevation: 10,
        backgroundColor: Res.FTCColors.Darpz

        
    },
    modalCloseContainer: {
        alignSelf: 'flex-end'
    },
    modalClose: {
        width: 14,
        height: 14
    },
    formInput: {
        marginBottom: 20,
        height: 38,
        width: 250,
        paddingTop: 2,
        paddingLeft: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.10,
        backgroundColor: 'white'
    },
    header: {
        paddingTop: 50,
        paddingBottom: 40,
        paddingLeft: 25,
        backgroundColor: Res.FTCColors.Darpz,
        borderColor: Res.FTCColors.Grabt,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    headerImageContainer: {
        position: 'absolute',
        top: 40,
        right: 5
    },
    headerImage: {
        width: 125,
        height: 125,
        position: "absolute",
        resizeMode: "contain",
        right: 10
    },
    headerIntro: {
        fontFamily: "SpaceGroteskBold",
        letterSpacing: 3.55,
        color: Res.FTCColors.Eggshell,
        paddingBottom: 10
    },
    headerTitle: {        
        fontFamily: "Facultad",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "left",
        color: Res.FTCColors.Yellop,
        width: 300,
        top: 10,
        right: 5,
    },
    homeContainer: {
        padding: 25,
        backgroundColor: Res.FTCColors.Darpz,

    },  
    subTitle: {
        fontFamily: 'Facultad',
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: Res.FTCColors.Pinky
    },
    button: {
        alignSelf: 'center',
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: Res.FTCColors.Yellop,
        borderRadius: 4
    },
    buttonText: {
        fontSize: 12,
        fontFamily: 'Facultad'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 16
    },
    eventItem: {
        flexDirection: 'row',
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.15,
        backgroundColor: Res.FTCColors.Liptz
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
        backgroundColor: Res.FTCColors.Liptz,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderColor: Res.FTCColors.Liptz,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10

    },
    announcementTitle: {
        fontSize: 18,
        fontFamily: 'Facultad',
    },
    announcementTime: {
        fontFamily: 'SpaceGroteskBold',
        fontWeight: '300',
        fontSize: 10,
        paddingTop: 5,
        paddingBottom: 10,
        letterSpacing: 1
    },
    announcementBody: {
        fontFamily: 'AvenirNext',
        backgroundColor: Res.FTCColors.LightPurple,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        paddingTop: 20,
        paddingHorizontal: 25,
        paddingBottom: 20,
        letterSpacing: 1,
    }
});
