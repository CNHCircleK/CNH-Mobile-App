import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Platform, ImageBackground, Image } from 'react-native';
import Res from '@resources';
import { block } from 'react-native-reanimated';

export default class FTC2021ActivityPage extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
           <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titleShape}>
                        <Image
                            style={styles.titleImage}
                            source={require('../../resources/FTC_2021/Icons/Frog_Golem_2.png')}
                        />
                        <Text style = {styles.titleText}>FALL TRAINING</Text>
                        <Text style = {styles.titleText}>CONFERENCE 2021</Text>

                        <Text style = {styles.resourcesText}>Activities</Text>
                    </View>
                    <View style={{ flexDirection:"row", justifyContent: 'space-evenly'}}>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Techx'}) }>
                            <Text style={styles.itemText}>Team Activities</Text>
                            <View style={styles.imagecontainer}>
                                <Image
                                    style={styles.buttonImage}
                                    source={require('../../resources/FTC_2021/Images/Crossbow.png')} />
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Merch'}) }>
                            <Text style={styles.itemText}>Entertainment</Text>
                            <View style={styles.imagecontainer}>
                                <Image
                                    style={styles.buttonImage}
                                    source={require('../../resources/FTC_2021/Icons/Sakura_Fish.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:"row", marginTop: '-7.5%', justifyContent: 'space-evenly'}}>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Candidate'}) }>
                            <Text style={styles.itemText}>Personality Quiz</Text>
                            <View style={styles.imagecontainer}>
                                <Image
                                    style={styles.buttonImage}
                                    source={require('../../resources/FTC_2021/Images/Stone_Sword.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Shoutouts'}) }>
                            <Text style={styles.itemText}>Side Quests</Text>
                            <View style={styles.imagecontainer}>
                                <Image
                                    style={styles.sideQuestImage}
                                    source={require('../../resources/FTC_2021/Images/R_Quest_Alert.png')} />
                            </View>
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
    imagecontainer: {
        flex: .1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    item: {
        marginVertical: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.25,
        backgroundColor: Res.FTCColors.Liptz,
        width: "40%",
        height: "70%"
    },
    itemText: {
        fontSize: 16,
        flex: .9,
        fontFamily: "Facultad",
    },
    resourcesText: {
        fontFamily: "Facultad",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "left",
        color: Res.FTCColors.Yellop,
        paddingTop: 10
    },
    titleText: {
        fontFamily: "SpaceGroteskBold",
        letterSpacing: 3.55,
        color: Res.FTCColors.Eggshell
    },
    titleShape: {
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
    titleImage: {
        width: 150,
        height: 150,
        position: "absolute",
        resizeMode: "contain",
        right: 20,
    },
    buttonImage: {
        width: 125,
        height: 125,
        marginTop: -60,
        marginBottom: -25
    },
    sideQuestImage: {
        width: 75,
        height: 75,
        marginTop: -35,
        marginBottom: 0
    }
});
