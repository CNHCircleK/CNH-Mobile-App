import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Platform, ImageBackground, Image } from 'react-native';

export default class FTC2021ResourcesPage extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
           <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titleShape}>
                        <Image
                            style={styles.titleImage}
                            source={require('../../resources/DCON_2021/Images/WindyWillow.png')}
                        />
                        <Text style = {styles.titleText}>District Convention 2021</Text>
                        <Text style = {styles.resourcesText}>RESOURCES</Text>
                    </View>
                    <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Techx'}) }>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={styles.buttonImage} 
                                source={require('../../resources/DCON_2021/Images/sunny.png')} />
                        </View>
                        <Text style={styles.itemText}>TechX Interest Form</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Merch'}) }>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={styles.buttonImage} 
                                source={require('../../resources/DCON_2021/Images/sunny.png')} />
                        </View>
                        <Text style={styles.itemText}>DCON 2021 Souvenir Package Form</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Candidate'}) }>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={styles.buttonImage} 
                                source={require('../../resources/DCON_2021/Images/sunny.png')} />
                        </View>
                        <Text style={styles.itemText}>DCON 2021 Candidate Literatures</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Shoutouts'}) }>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={styles.buttonImage} 
                                source={require('../../resources/DCON_2021/Images/sunny.png')} />
                        </View>
                        <Text style={styles.itemText}>DCON 2021 Shoutouts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Program'}) }>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={styles.buttonImage} 
                                source={require('../../resources/DCON_2021/Images/sunny.png')} />
                        </View>
                        <Text style={styles.itemText}>DCON 2021 Program</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Conduct'}) }>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={styles.buttonImage} 
                                source={require('../../resources/DCON_2021/Images/sunny.png')} />
                        </View>
                        <Text style={styles.itemText}>DCON 2021 Code of Conduct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Website'}) }>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={styles.buttonImage} 
                                source={require('../../resources/DCON_2021/Images/sunny.png')} />
                        </View>
                        <Text style={styles.itemText}>DCON 2021 Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Meeting'}) }>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={styles.buttonImage} 
                                source={require('../../resources/DCON_2021/Images/sunny.png')} />
                        </View>
                        <Text style={styles.itemText}>March District Board Meeting Packet</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imagecontainer: {
        flex: .1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    item: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.15,
        backgroundColor: 'white'
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
        color: Res.DCONColors.JellyBean
    },
    titleText: {
        fontWeight: '300'
    },
    titleShape: {
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingTop: 120,
        paddingBottom: 20,
        paddingLeft: 30,
        marginBottom: 10,
        backgroundColor: Res.DCONColors.Polar
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