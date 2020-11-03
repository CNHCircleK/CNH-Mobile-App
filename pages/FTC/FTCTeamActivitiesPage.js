import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity, Platform, StatusBar, SafeAreaView } from 'react-native';
import Res from '@resources';
import { HeaderBackButton } from '@react-navigation/stack';


const activitiesData = [
    {
        title: 'Memory Making Session I',
        data: [
            {
                name: '1. Recollecting Your Past',
                desc: 'A scavenger hunt of sorts in which you must first solve riddles that are assigned to you by your team captain. These riddles will lead you to items that can be found in your household and the more items you and your teammates grab, the more points you will gain!'
            },
            {
                name: '2. Photographic Memory',
                desc: 'Each team member will have a chance to draw a subject that their team captain will message to them. Team members will draw the image using the annotate feature on Zoom, but with your eyes covered. After the team member is done drawing, the rest of the team members will have to come up with ONE collective guess on what they think the subject is. The more guesses your team gets correct, the more points you will earn!'
            }
        ]
    },
    {
        title: 'Memory Making Session II',
        data: {
            name: 'Three Picture Throwbacks',
            desc: [
                'Everyone will have 5 minutes to look through their phone and choose three APPROPRIATE photos based off of these three themes:',
                'ONE Childhood Photo',
                'ONE High School Photo',
                'ONE CKI/College Photo or ONE Influential Person/Group Photo if you are a first year new member',
                'After everyone has chosen their photos, they will each have a chance to share their photos and explain the meaning behind them. There are no points for this activity; this is simply a time for team members to bond and share their experiences with each other.'
            ]
        }
    }
];

export default class FTCTeamActivitiesPage extends Component {
    state = {
        data: activitiesData[this.props.route.params.session]
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <HeaderBackButton tintColor='#fefefe' onPress={() => this.props.navigation.goBack(null)} />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}> {this.state.data.title} </Text>
                </View>
                <ScrollView>
                    {
                        !this.props.route.params.session ?
                        <View style={styles.activityContainer}>
                            <View style={styles.activitySubContainer}>
                                <Text style={styles.activityTitle}>{this.state.data.data[0].name}</Text>
                                <Text style={styles.activityText}>{this.state.data.data[0].desc}</Text>
                            </View>
                            <View style={styles.activitySubContainer}>
                                <Text style={styles.activityTitle}>{this.state.data.data[1].name}</Text>
                                <Text style={styles.activityText}>{this.state.data.data[1].desc}</Text>
                            </View>
                        </View>
                        :
                        <View style={styles.activityContainer}>
                            <Text style={styles.activityTitle}>{this.state.data.data.name}</Text>
                            <Text style={styles.activityText}>{this.state.data.data.desc[0]}</Text>
                            <Text style={styles.activityText}>{this.state.data.data.desc[1]}</Text>
                            <Text style={styles.activityText}>{this.state.data.data.desc[2]}</Text>
                            <Text style={styles.activityText}>{this.state.data.data.desc[3]}</Text>
                            <Text style={styles.activityText}>{this.state.data.data.desc[4]}</Text>
                        </View>
                    }
                </ScrollView>
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
    activityContainer: {
        padding: 20
    },
    activitySubContainer: {
        marginBottom: 25
    },
    activityTitle: {
        paddingBottom: 5,
        fontFamily: 'French-Press',
        fontSize: 34,
        color: 'white'
    },
    activityText: {
        fontFamily: 'Arbutus-Slab',
        fontSize: 14,
        color: Res.FTCColors.TeaGreen,
        paddingVertical: 6
    }
});
