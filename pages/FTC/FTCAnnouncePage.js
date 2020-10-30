import React, { useState, useCallback } from 'react';
import { Image, Text, View, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { getData } from '../../utils/Firebase';
import { useFocusEffect } from '@react-navigation/native';
import Res from '@resources'

export default function FTCAnnouncePage() {
    const [announcements, setAnnouncements] = useState([]);

    getAnnouncements = async () => {
        let fireData = await getData('ftc-announcements', "timestamp", "desc");
        setAnnouncements(fireData);
    };

    useFocusEffect(
        useCallback(() => {
            getAnnouncements();
        }, [])
    );

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.announceTitle}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
                <Text style={styles.timeText}>{item.timestamp ? item.timestamp.toDate().toLocaleString() : ''}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
            <Image style={{width: 125, height: 125}}
            resizeMode="contain"
            source={require('../../resources/ftc2020/images/stickynote.png')}/>
            <Text style = {styles.titleText}>Announcements</Text>
            </View>
            <FlatList
                contentContainerStyle={styles.scrollView}
                data={announcements}
                renderItem={renderItem}
                keyExtractor={ (item, index) => index.toString() }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: Res.FTCColors.TealBlue
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor:Res.FTCColors.TealBlue
    },
    titleText: {
      fontFamily: "Gilberto",
      fontSize: 100,
      color: Res.FTCColors.MellowApricot
    },
    scrollView: {
        padding: 8
    },
    timeText: {
      fontSize: 12,
      color: 'grey',
      marginTop: 5,
      fontFamily: "Arbutus-Slab"
    },
    item: {
      backgroundColor: Res.FTCColors.TeaGreen,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 8,
      borderRadius: 20
    },
    announceTitle: {
      color: "black",
      fontSize: 30,
      fontFamily: "Arbutus-Slab"
    },
    body: {
      color: "black",
      fontSize: 15,
      fontFamily: "Arbutus-Slab"
    }
});
