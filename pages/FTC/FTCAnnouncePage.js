import React, { useState, useCallback } from 'react';
import { Image, ImageBackground, Text, View, FlatList, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, Platform, StatusBar, Modal } from 'react-native';
import { getData } from '../../utils/Firebase';
import { useFocusEffect } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import Res from '@resources'

export default function FTCAnnouncePage(props) {
    const [announcements, setAnnouncements] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [password, setPassword] = useState('');

    getAnnouncements = async () => {
        let fireData = await getData('ftc-announcements', "timestamp", "desc");
        setAnnouncements(fireData);
    };

    useFocusEffect(
        useCallback(() => {
            getAnnouncements();
            const subscription = Notifications.addNotificationReceivedListener(notification => {
                getAnnouncements();
            });
            return () => subscription.remove();
        }, [])
    );

    checkPassword = () => {
        if(password === 'ftcadmin') {
            props.navigation.navigate('Admin');
            setModalVisible(false);
        } else if(password === 'workshopadmin') {
            props.navigation.navigate('WorkshopAdmin');
            setModalVisible(false);
        }
    };

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.announceTitle}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
                <Text style={styles.timeText}>{item.timestamp.toDate().toLocaleString()}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalText}>Password:</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={ (pass) => setPassword(pass) }
                        value={password}
                    />
                    <TouchableOpacity
                        style={styles.goButton}
                        onPress={checkPassword}
                    >
                        <Text style={styles.modalText}>Go</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={ () => setModalVisible(false) }
                    >
                        <Text style={styles.modalText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <ImageBackground source={require('../../resources/ftc2020/images/bluelightsbackground.gif')} style={styles.image}>
                <View style={styles.title}>
                    <TouchableOpacity onPress={ () => setModalVisible(true) }>
                        <Image 
                            style={{width: 125, height: 125}}
                            resizeMode="contain"
                            source={require('../../resources/ftc2020/images/stickynote.png')}
                        />
                    </TouchableOpacity>
                    <Text style = {styles.titleText}> Announcements </Text>
                </View>
                <FlatList
                    contentContainerStyle={styles.scrollView}
                    data={announcements}
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
    modal: {
        flexDirection: 'row',
        backgroundColor: Res.FTCColors.ScheduleText,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 70,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },
    modalText: {
        fontFamily: 'Arbutus-Slab'
    },
    textInput: {
        flex: 1,
        height: 24,
        marginHorizontal: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        color: 'black',
        fontFamily: 'Arbutus-Slab'
    },
    goButton: {
        backgroundColor: Res.FTCColors.TeaGreen,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 10
    },
    closeButton: {
        backgroundColor: Res.FTCColors.PersianOrange,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 10
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
    announceTitle: {
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
