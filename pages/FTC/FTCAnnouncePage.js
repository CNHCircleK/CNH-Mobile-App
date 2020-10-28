import { getNativeSourceAndFullInitialStatusForLoadAsync } from 'expo-av/build/AV';
import React, { Component } from 'react';
import { Text, View, FlatList, Picker, StyleSheet, TouchableOpacity,
        SafeAreaView,ScrollView,TouchableHighlight, Platform } from 'react-native';

const data = [
  {id: "announcement", title: "Hello everyone, welcome to FTC!!!", date: "Friday", time: "10:00 AM",},
  {id: "announcement1", title: "Workshop: How to be an ABG is canceled!", date: "Saturday", time: "10:00 AM",},
];

const announcements = data.reverse();

class FTCAnnouncePage extends Component {
  renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.announce}>{item.title}</Text>
            <Text style={styles.timeText}>{item.date + " \u00B7 " + item.time}</Text>
        </TouchableOpacity>
    );
};


  render(){
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style = {styles.titleText}>Announcements</Text>
        </View>
        <View>
          <FlatList
            data={announcements}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#757D84',
    },
    title: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      padding: 30,
      backgroundColor: "#704346",
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#E9C99C'
    },

    timeText: {
      fontSize: 12,
      color: 'grey'
    },

    item: {
      backgroundColor: '#E3AEA8',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },

    announce: {
      color: "black",  
      fontSize: 20,
    },
})

export default FTCAnnouncePage;