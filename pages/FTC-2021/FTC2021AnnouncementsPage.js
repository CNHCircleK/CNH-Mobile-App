import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { getData } from '../../utils/Firebase';
import { getTimeString } from '../../utils/Misc';
import Res from '@resources';

export default class DCONAnnouncementsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: []
        };
    }

    componentDidMount = async () => {
        await this.getAnnouncements();
    };

    getAnnouncements = async () => {
        let updatedAnnouncements = await getData('dcon-announcements', 'timestamp', 'desc');

        updatedAnnouncements.forEach((item, index) => {
            updatedAnnouncements[index].timestamp = updatedAnnouncements[index].timestamp.toDate();
        });

        this.setState({announcements: updatedAnnouncements});
    };

    renderAnnouncement = ({item}) => {
        let date = item.timestamp.toLocaleDateString('en-US');
        let time = Platform.OS === 'ios' ? item.timestamp.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'}) : getTimeString(item.timestamp);
        let timestamp = date + ' ' + time;

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
                <View style={styles.header}>
                    {/* <Image style={styles.headerImage} source={require('../../resources/DCON_2021/Images/approvedlogo.png')} /> */}
                    <Text style={styles.headerIntro}>District Convention 2021</Text>
                    <Text style={styles.headerTitle}>Announcements</Text>
                </View>
                <FlatList
                    data={this.state.announcements}
                    renderItem={this.renderAnnouncement}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                    keyExtractor={(item, index) => index.toString()} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Res.FTCColors.Darpz,
    },
    header: {
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingTop: 50,
        paddingBottom: 20,
        paddingLeft: 30,
        marginBottom: 10,
        backgroundColor: Res.FTCColors.Darpz,
        borderColor: Res.FTCColors.Grabt,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    headerImage: {
        position: 'absolute',
        top: 30,
        right: 5,
        width: 150,
        height: 150
    },
    headerIntro: {
        fontWeight: '300',
        fontSize: 18,
        marginBottom: 10,
        top: 10,
        right: 5,
        color: Res.FTCColors.Eggshell,
    },
    headerTitle: {        
        fontFamily: "Facultad",
        fontSize: 33,
        fontWeight: "bold",
        textAlign: "left",
        letterSpacing: 2,
        color: Res.FTCColors.Yellop,
        width: 300,
        top: 10,
        right: 5,
    },
    listContainer: {
        padding: 25,
        paddingTop: 15,
        color: Res.FTCColors.Darpz,
    },
    announcementContainer: {
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.15,
        color: Res.FTCColors.LightPurple,
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
        fontFamily: 'Coolvetica',
        letterSpacing: 0.5
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
