import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { getData } from '../../utils/Firebase';
import Res from '@resources';

export default class DCONAnnouncementsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: []
        };
    }

    componentDidMount = async () => {
        let updatedAnnouncements = await getData('dcon-announcements', 'timestamp', 'desc');

        updatedAnnouncements.forEach((item, index) => {
            updatedAnnouncements[index].timestamp = updatedAnnouncements[index].timestamp.toDate();
        });

        this.setState({announcements: updatedAnnouncements});
    };

    renderAnnouncement = ({item}) => {
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
                <View style={styles.header}>
                    <Image style={styles.headerImage} source={require('../../resources/DCON_2021/Images/approvedlogo.png')} />
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
        flex: 1
    },
    header: {
        paddingTop: 80,
        paddingBottom: 35,
        paddingLeft: 25,
        backgroundColor: Res.DCONColors.Polar
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
    },
    headerTitle: {        
        fontFamily: "Coolvetica",
        fontSize: 33,
        fontWeight: "bold",
        textAlign: "left",
        letterSpacing: 2,
        color: Res.DCONColors.JellyBean,
        width: 300,
        top: 10,
        right: 5,
    },
    listContainer: {
        padding: 25,
        paddingTop: 15
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
