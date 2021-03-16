import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Platform, ImageBackground, Image } from 'react-native';
import Res from '@resources';
import { Row } from 'react-native-table-component';

export default class DCONResourcesPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
           <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollView}
                >
                    <View style={styles.titleShape}>
                        <Image
                            style={styles.titleImage}
                            source={require('../../resources/dcon2020/images/WindyWillow.png')}
                        />
                        <Text style = {styles.titleText}>District Convention 2021</Text>
                        <Text style = {styles.resourcesText}>Resources</Text>
                    </View>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("Merch") }>
                            <View style={styles.imagecontainer}>
                            <Image
                                style={styles.buttonImage} 
                                source={require('../../resources/dcon2020/images/sunny.png')}/>
                            </View>
                            <Text style={styles.itemText}>DCON Merch Form</Text>
                        </TouchableOpacity>
                    <View style={styles.itemcontainer}>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("Shoutout") }>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={styles.buttonImage} 
                                source={require('../../resources/dcon2020/images/sunny.png')}/>
                            </View>
                            <Text style={styles.itemText}>DCON Shoutout Form</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemcontainer}>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("Conduct") }>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={styles.buttonImage} 
                                source={require('../../resources/dcon2020/images/sunny.png')}/>
                            </View>
                            <Text style={styles.itemText}>DCON Code of Conduct</Text>
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
        backgroundColor: Res.FTCColors.BlueLightsBackground,
    },
    scrollView: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    imagecontainer: {
        flex: .1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    item: {
        flex: 1,
        flexDirection: "row",
        height: 50,
        margin: 10,
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
    itemText: {
        fontSize: 25,
        // fontFamily: "French-Press",
        flex: .9,
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        height: "140%",
    },
    resourcesText: {
        justifyContent: "center",
        alignItems: "center",
        // fontFamily: "Gilberto",
        fontSize: 50,
        color: Res.FTCColors.MellowApricot,
        top: 95,
        right: 135,
        position: "absolute",
    },
    titleText: {
        justifyContent: "center",
        alignItems: "center",
        // fontFamily: "Gilberto",
        fontSize: 19,
        color: Res.FTCColors.MellowApricot,
        flex: .7,
        right: 20,
        top: 40,
    },
    titleShape: {
        flexDirection: "row",
        flex: 1,
        padding: 35,
        backgroundColor: Res.FTCColors.BlueLightsBackground,
        marginBottom: 100,
    },
    titleImage: {
        flex: .3,
        width: 150,
        height: 150,
        position: "absolute",
        resizeMode: "contain",
        right: -10,
        top: 40,
    },
    buttonImage: {
        width: "100%",
        height: "100%",
        position: "relative",
        resizeMode: "contain",
    }
});