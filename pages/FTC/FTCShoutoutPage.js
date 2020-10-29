import React, { useState, useCallback } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { getData } from '../../utils/Firebase';
import { useFocusEffect } from '@react-navigation/native';

export default function FTCShoutoutPage() {
    const [shoutouts, setShoutouts] = useState([]);

    getShoutouts = async () => {
        let fireData = await getData('ftc-shoutouts', "timestamp", "desc");
        setShoutouts(fireData);
    };

    useFocusEffect(
        useCallback(() => {
            getShoutouts();
        }, [])
    );

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.shoutoutTitle}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
                <Text style={styles.timeText}>{item.timestamp ? item.timestamp.toDate().toLocaleString() : ''}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style = {styles.titleText}>Shoutouts</Text>
            </View>
            <FlatList
                contentContainerStyle={styles.scrollView}
                data={shoutouts}
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
        backgroundColor: '#757D84'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#704346"
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#E9C99C'
    },
    scrollView: {
        padding: 8
    },
    timeText: {
        fontSize: 12,
        color: 'grey',
        marginTop: 5
    },
    item: {
        backgroundColor: '#E3AEA8',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 20
    },
    shoutoutTitle: {
        color: "black",  
        fontSize: 20,
        fontWeight: "bold"
    },
    body: {
        color: "black",
        fontSize: 15
    }
});

