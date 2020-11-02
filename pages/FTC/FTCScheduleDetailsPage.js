import React, { Component } from 'react';
import { Image, View, StyleSheet, Text, FlatList, TouchableOpacity, Platform, StatusBar, Switch, SafeAreaView } from 'react-native';
import Res from '@resources';

const workshopData = [
    {
        title: 'Workshop Session I [Friday]',
        workshops: [
            {
                name: 'DSI: Serving the Environment',
                host: 'Karishma Sira & Kristin Nguyen',
                desc: 'Come join your fellow CNH Circle K members in Learning about this year\'s District Service Initiative: Serving the Environment! The District Service Committee will be providing you all the info you need to learn about the DSI and how you can partake in it this year.'
            },
            {
                name: 'Adjusting Your Mindset; Getting That Job',
                host: 'Chris Tung',
                desc: 'Entering the job market and pursuing new endeavors can often be discouraging at times. Learn about how to modify your frame of mind to put yourself in the best state to tackle the challenges ahead.'
            }
        ]
    }
];

export default class FTCScheduleDetailsPage extends Component {
    state = {
        data: workshopData[this.props.route.params.session]
    };

    renderItem = ({item}) => {
        return(
            <View style={styles.workshopContainer}>
                <Text style={styles.workshopName}>{item.name}</Text>
                <Text style={styles.workshopHost}>{item.host}</Text>
                <Text style={styles.workshopDesc}>{item.desc}</Text>
            </View>
        );
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{this.state.data.title}</Text>
                </View>
                <FlatList
                    data={this.state.data.workshops}
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
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    titleText: {
        fontFamily: "Gilberto",
        fontSize: 100,
        textAlign: 'center',
        color: Res.FTCColors.MellowApricot
    },
    workshopContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    workshopName: {
        fontFamily: 'French-Press',
        fontSize: 30,
        color: 'white'
    },
    workshopHost: {
        fontFamily: 'Arbutus-Slab',
        fontSize: 12,
        opacity: 0.6,
        marginBottom: 6
    },
    workshopDesc: {
        fontFamily: 'Arbutus-Slab',
        fontSize: 14,
        color: Res.FTCColors.TeaGreen
    }
});