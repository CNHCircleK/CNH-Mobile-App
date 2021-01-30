import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Platform, ImageBackground, Image } from 'react-native';
import Res from '@resources';

export default class DCONResourcesPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
           <View style={styles.container}>
               <ImageBackground source={require('../../resources/ftc2020/images/bluelightsbackground.gif')} style={styles.image}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollView}
                >
                    <View style={styles.titleShape}>
                        <Image
                            style={styles.titleImage}
                            source={require('../../resources/ftc2020/images/clipboard_2.png')}
                        />
                        <Text style = {styles.titleText}>FTC Resources</Text>
                    </View>
                    <View style={styles.itemcontainer}>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("Teams") }>
                            <Text style={styles.itemText}>FTC Teams</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemcontainer}>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("Program") }>
                            <Text style={styles.itemText}>FTC Program</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </ImageBackground>
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
    itemcontainer: {
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        height: 150,
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
        fontSize: 50,
        textAlign: 'center',
        fontFamily: "French-Press",
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        height: "140%",
    },
    titleText: {
        fontFamily: "Gilberto",
        fontSize: 95,
        color: Res.FTCColors.MellowApricot,
    },
    titleShape: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        backgroundColor: Res.FTCColors.BlueLightsBackground
    },
    titleImage: {
        height: 120,
        width: 120,
        justifyContent: "flex-end",
        position: "relative",
    },
});