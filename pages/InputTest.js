import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { sendData, getData } from '../utils/Firebase';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button
} from "react-native";

export default class InputTest extends Component {
  state = {
      event: '',
      name: '',
      question: '',
      school: ''
     
  }

  onChangeEvent = (nEvent) => this.setState({ event: nEvent });

  onChangeName = (nName) => this.setState({ name: nName });

  onChangeSchool = (nSchool) => this.setState({ school: nSchool });

  onChangeQuestion = (nQuestion) => this.setState({ question: nQuestion });


  sendInput = async () => {
    await sendData('ftc-responses', { event: this.state.event, name: this.state.name, question: this.state.question, school: this.state.school, timestamp: new Date() });

   
};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Input Test</Text>
        </View>
        <ScrollView 
                    contentContainerStyle={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >   

          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>Event:</Text>
            <TextInput
        style={styles.textInput}
        onChangeText={this.onChangeEvent}
        value = {this.state.event}

      />
      <Text style={styles.messageText}>Name:</Text>

        <TextInput
        style={styles.textInput}
        onChangeText={this.onChangeName}
        value = {this.state.name}


      />
        <Text style={styles.messageText}>Question:</Text>

        <TextInput
        style={styles.textInput}
        onChangeText={this.onChangeQuestion}
        value = {this.state.question}


      />
        <Text style={styles.messageText}>School:</Text>

        <TextInput
        style={styles.textInput}
        onChangeText={this.onChangeSchool}
        value = {this.state.school}


      />
      <View style = {styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => this.sendInput}>
                            <Text style={styles.buttonText}>Send Input</Text>
       </TouchableOpacity>
          </View>
          
          </View>
          </ScrollView>
          </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: '#757D84'
  },
  scrollView: {
      padding: 16
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
  messageContainer: {
      marginBottom: 5
  },
  messageText: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#E9C99C'
  },
  textInput: {
      height: 24,
      borderBottomColor: '#E3AEA8',
      borderBottomWidth: 1,
      color: '#E9C99C',
      marginBottom: 5
  },
  buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10
  },
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E3AEA8',
      marginVertical: 10,
      padding: 20,
      borderRadius: 10
  },
  buttonText: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#704346'
  },
  resultText: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#E9C99C',
      marginBottom: 40
  }
});
