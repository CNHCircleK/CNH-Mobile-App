import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Platform, ImageBackground, Image } from 'react-native';
import Res from '@resources';

export default class DCONShopPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
           <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollView}
                >
                    <View style={styles.titleShape}>
                        <Text style = {styles.subtitleText}>District Convention 2021</Text>
                        <Text style = {styles.titleText}>OFFICIAL SHOP</Text>
                    </View>
                    
                    <View style={styles.itemcontainer}>
                        <View style={styles.introItem}>
                            <Text style={styles.introText}>Welcome to the District Convention 2021: </Text>
                            <Text style={styles.introText}>Forecasting Meaningful Service merchandise shop!{"\n"}</Text>
                            <Text style={styles.introText}>In order to purchase the following items remember 
                                                        to fill out its order form avaliable in 'Resources' 
                                                        and submit a payment via Paypal. Happy shopping!</Text>
                        </View>
                    </View>
                    
                    <View style={styles.itemcontainer}>
                        <TouchableOpacity style={styles.shopItem} onPress={ () => navigate("Shoutout") }>
                            <Text style={styles.shopText}>DCON 2021 Souvenir Package</Text>
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
        backgroundColor: 'white',
    },
    scrollView: {
        /*
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        */
    },
    itemcontainer: {
    },
    shopItem: {
        flex: 1,
        height: 350,
        marginHorizontal: 30,
        marginBottom: 50,
        backgroundColor: Res.FTCColors.TeaGreen,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    introItem: {
        flex: 1,
        height: 175,
        marginHorizontal: 30,
        marginVertical: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 60,
        paddingRight: 10,
        justifyContent: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    shopText: {
        fontSize: 50,
        textAlign: 'center',
        fontFamily: "Coolvetica",
    },
    introText: {
        fontSize: 14,
        textAlign: 'left',
        fontFamily: "Coolvetica",
    },
    subtitleText : {
        fontFamily: "Coolvetica",
        fontSize: 20,
        textAlign: "left",
        letterSpacing: 1,
        color: Res.FTCColors.MellowApricot
    },
    titleText: {
        fontFamily: "Coolvetica",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "left",
        letterSpacing: 2,
        color: Res.FTCColors.MellowApricot
    },
    titleShape: {
        justifyContent: 'center',
        padding: 30,
        paddingTop: 45,
        paddingBottom: 25,
        backgroundColor: Res.FTCColors.BlueLightsBackground
    },
});