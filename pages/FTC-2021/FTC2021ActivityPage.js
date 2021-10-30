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
                        <Text style = {styles.titleText}>Fall Training</Text>
                        <Text style = {styles.titleText}>Conference 2021</Text>

                        <Text style = {styles.resourcesText}>Activities</Text>
                    </View>
                    <View style={{ flexDirection:"row"}}>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Techx'}) }>
                            <Text style={styles.itemText}>Team Activities</Text>
                            <View style={styles.imagecontainer}>
                                <Image
                                    style={styles.buttonImage}
                                    source={require('../../resources/DCON_2021/Images/sunny.png')} />
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Merch'}) }>
                            <Text style={styles.itemText}>Entertainment</Text>
                            <View style={styles.imagecontainer}>
                                <Image
                                    style={styles.buttonImage}
                                    source={require('../../resources/DCON_2021/Images/sunny.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:"row", marginTop: 2}}>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Candidate'}) }>
                            <Text style={styles.itemText}>Personality Quiz</Text>
                            <View style={styles.imagecontainer}>
                                <Image
                                    style={styles.buttonImage}
                                    source={require('../../resources/DCON_2021/Images/sunny.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Shoutouts'}) }>
                            <Text style={styles.itemText}>Side Quests</Text>
                            <View style={styles.imagecontainer}>
                                <Image
                                    style={styles.buttonImage}
                                    source={require('../../resources/DCON_2021/Images/sunny.png')} />
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
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.15,
        backgroundColor: Res.FTCColors.Liptz,
        width: "40%",
        height: "60%"
    },
    itemText: {
        fontSize: 16,
        flex: .9,
    },
    resourcesText: {
        fontFamily: "Coolvetica",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "left",
        letterSpacing: 4,
        color: Res.FTCColors.Yellop
    },
    titleText: {
        fontWeight: '300'
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
        top: 50,
    },
    buttonImage: {
        width: 30,
        height: 30,
    }
});
