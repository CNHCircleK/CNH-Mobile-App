import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
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
                    <Image
                            style={styles.titleImage}
                            source={require('../../resources/DCON_2021/Images/sun.png')}
                    />

                    <View style={styles.itemcontainer}>
                        <Image
                            style={styles.introImage}
                            source={require('../../resources/DCON_2021/Images/Harley.png')}
                        />
                        <View style={styles.introItem}>
                            <Text style={styles.introText}>Welcome to the District Convention 2021: </Text>
                            <Text style={styles.introText}>Forecasting Meaningful Service merchandise shop!{"\n"}</Text>
                            <Text style={styles.introText}>In order to purchase the following items remember 
                                                        to fill out its order form avaliable in 'Resources' 
                                                        and submit a payment via Paypal. Happy shopping!</Text>
                        </View>
                    </View>
                    
                    <View style={styles.shopContainer}>
                        <Image
                            style={styles.shopImage}
                            source={require('../../resources/DCON_2021/Images/DCONpackage.jpg')}
                        />
                        <Text style={styles.shopText}>DCON 2021 Souvenir Package</Text>
                        <Text style={styles.shopPrice}>$10</Text>
                        <TouchableOpacity style={styles.orderButton} onPress={ () => navigate("Merch") }>
                            <Text style={styles.shopButtonText}>ORDER FORM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.purchaseButton} onPress={ () => navigate("Purchase") }>
                            <Text style={styles.shopButtonText}>PURCHASE ITEM</Text>
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

    },
    itemcontainer: {
    },
    introImage: {
        height: 160,
        left: 18,
        position:'absolute',
        top: 70,
        width: 64,
        zIndex: 2,
    },
    introItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 8,
        flex: 1,
        height: 175,
        justifyContent: 'center',
        marginHorizontal: 30,
        marginVertical: 30,
        paddingLeft: 60,
        paddingRight: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    introText: {
        fontSize: 14,
        fontWeight: '300',
        textAlign: 'left',
    },
    shopContainer : {
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        height: 450,
        marginHorizontal: 30,
        marginBottom: 50,
        position: 'relative',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    orderButton: {
        alignItems: 'center',
        position: 'absolute',
        width: "40%",
        height: 30,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: Res.DCONColors.Gold,
        justifyContent: 'center',
        bottom: 20,
        left: 20,
    },
    purchaseButton: {
        alignItems: 'center',
        position: 'absolute',
        width: "40%",
        height: 30,
        backgroundColor: Res.DCONColors.Gold,
        justifyContent: 'center',
        bottom: 20,
        right: 20,
    },
    shopImage: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1,
        height: "77%",
    },
    shopText: {
        position: 'absolute',
        bottom: 65,
        left: 20,
        fontSize: 20,
        fontFamily: "Coolvetica",
        letterSpacing: .75,
    },
    shopPrice: {
        position: 'absolute',
        bottom: 65,
        right: 20,
        color: Res.DCONColors.JellyBean,
        fontSize: 20,
        fontFamily: "Coolvetica",
        fontWeight: "bold",
        letterSpacing: 4,
    },
    shopButtonText: {
        fontSize: 10,
    },
    subtitleText : {
        fontWeight: '300',
        textAlign: "left",
    },
    titleImage: {
        position:'absolute',
        width: 140,
        height: 140,
        top: 40,
        right: 0,
    },
    titleText: {
        fontFamily: "Coolvetica",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "left",
        letterSpacing: 4,
        color: Res.DCONColors.JellyBean
    },
    titleShape: {
        justifyContent: 'center',
        padding: 30,
        paddingTop: 120,
        paddingBottom: 25,
        backgroundColor: Res.DCONColors.Polar
    },
});