import { getNativeSourceAndFullInitialStatusForLoadAsync } from 'expo-av/build/AV';
import React, { Component } from 'react';
import { Text, View, FlatList, Picker, StyleSheet, TouchableOpacity,
        SafeAreaView,ScrollView,TouchableHighlight, Platform } from 'react-native';
import { sendData, getData } from '../../utils/Firebase';

class FTCAnnouncePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      fireData : null,
      announcements : null,
    };
  }
  async getAnnouncements() {
    var fireData = await getData('ftc-announcements',"timestamp","desc",);
    this.setState({
      announcements : fireData,
    })
    console.log(this.state.announcements);
}
  async componentDidMount() {
    await this.getAnnouncements();
  }
  renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.announceTitle}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Text style={styles.timeText}>{item.timestamp.toDate().toLocaleString()}</Text>
        </TouchableOpacity>
    );
};

  render(){
    if (!this.state.announcements) {
      return <View></View>
    }
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style = {styles.titleText}>Announcements</Text>
        </View>
        <View>
          <FlatList
            data={this.state.announcements}
            renderItem={this.renderItem}
            keyExtractor={item => item.title}
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

    announceTitle: {
      color: "black",  
      fontSize: 20,
      fontWeight: "bold",
    },

    body: {
      color: "black",
      fontSize: 15,
    },
})

export default FTCAnnouncePage;