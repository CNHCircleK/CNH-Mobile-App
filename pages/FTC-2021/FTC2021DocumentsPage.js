import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Platform, ImageBackground, Image } from 'react-native';
import Res from '@resources';

export default class FTC2021DocumentsPage extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
           <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titleShape}>
                        {/* <Text style = {styles.titleText}>District Convention 2021</Text> */}
                        <Text style = {styles.resourcesText}>Documents</Text>
                    </View>
                    <View style={{ flexDirection:"row", justifyContent: 'space-evenly', flexWrap: 'wrap'}}>

                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Techx'}) }>
                            <Text style={styles.itemText}>Document</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Merch'}) }>
                            <Text style={styles.itemText}>Document</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Candidate'}) }>
                            <Text style={styles.itemText}>Document</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Shoutouts'}) }>
                            <Text style={styles.itemText}>Document</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Program'}) }>
                            <Text style={styles.itemText}>Document</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Conduct'}) }>
                            <Text style={styles.itemText}>Document</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Website'}) }>
                            <Text style={styles.itemText}>Document</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("ResourcesWebView", {link: 'Meeting'}) }>
                            <Text style={styles.itemText}>Document</Text>
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
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.15,
        backgroundColor: Res.FTCColors.Liptz,
        width: 160,
        height: 70,
    },
    itemText: {
        fontSize: 18,
        flex: .9,
        fontFamily: "Facultad",
        textAlign: "center",
    },
    resourcesText: {
        fontFamily: "Facultad",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        color: Res.FTCColors.Yellop,
        letterSpacing: -1.5
    },
    titleText: {
        fontWeight: '300'
    },
    titleShape: {
        paddingTop: 60,
        paddingBottom: 40,
        textAlign: "center",
        marginBottom: 10,
        backgroundColor:  Res.FTCColors.Darpz,
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
