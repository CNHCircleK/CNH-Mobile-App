import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity,
        SafeAreaView,} from 'react-native';
import { getData } from '../../utils/Firebase';

class FTCShoutoutPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      fireData : null,
      shoutouts : null,
    };
  }
  async getShoutouts() {
    var fireData = await getData('ftc-shoutouts',"timestamp","desc",);
    this.setState({
      shoutouts : fireData,
    })
}
  async componentDidMount() {
    await this.getShoutouts();
  }
  renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.shoutoutTitle}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Text style={styles.timeText}>{item.timestamp.toDate().toLocaleString()}</Text>
        </TouchableOpacity>
    );
};

  render(){
    if (!this.state.shoutouts) {
      return <View></View>
    }
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style = {styles.titleText}>Shoutouts</Text>
        </View>
        <View>
          <FlatList
            data={this.state.shoutouts}
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

    shoutoutTitle: {
      color: "black",  
      fontSize: 20,
      fontWeight: "bold",
    },

    body: {
      color: "black",
      fontSize: 15,
    },
})

export default FTCShoutoutPage;