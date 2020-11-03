import React, { useState, useCallback } from 'react';
import { Image, ImageBackground, Text, View, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { getData } from '../../utils/Firebase';
import { useFocusEffect } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import Res from '@resources';

export default function FTCShoutoutPage() {
    const [shoutouts, setShoutouts] = useState([]);

    getShoutouts = async () => {
        let fireData = await getData('ftc-shoutouts', "timestamp", "desc");
        setShoutouts(fireData);
    };

    useFocusEffect(
        useCallback(() => {
            getShoutouts();
            const subscription = Notifications.addNotificationReceivedListener(notification => {
                getShoutouts();
            });
            return () => subscription.remove();
        }, [])
    );

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.shoutoutTitle}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
                <Text style={styles.timeText}>{item.timestamp.toDate().toLocaleString()}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../resources/ftc2020/images/bluelightsbackground.gif')} style={styles.image}>
                <View style={styles.title}>
                    <Image style={{width: 125, height: 125}}
                    resizeMode="contain"
                    source={require('../../resources/ftc2020/images/sign.png')}/>
                    <Text style = {styles.titleText}> Shoutouts </Text>
                </View>
                <FlatList
                    contentContainerStyle={styles.scrollView}
                    data={shoutouts}
                    renderItem={renderItem}
                    keyExtractor={ (item, index) => index.toString() }/>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: Res.FTCColors.BlueLightsBackground
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titleText: {
        fontFamily: "Gilberto",
        fontSize: 100,
        color: Res.FTCColors.MellowApricot,
        backgroundColor: Res.FTCColors.BlueLightsBackground,
        marginTop: -20
    },
    scrollView: {
        padding: 8
    },
    timeText: {
        fontSize: 12,
        color: 'black',
        marginTop: 5,
        fontFamily: "Arbutus-Slab",
        opacity: 0.6
    },
    item: {
        backgroundColor: Res.FTCColors.TeaGreen,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 20
    },
    shoutoutTitle: {
        color: "black",
        fontSize: 40,
        fontFamily: "French-Press",
        opacity: 0.87
    },
    body: {
        color: "black",
        fontSize: 15,
        fontFamily: "Arbutus-Slab",
        opacity: 0.87

    },
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        height: "140%"
    }
});
