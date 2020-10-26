import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button
} from "react-native";

class InputTest extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.titleView}>
            <Text style={styles.logoText}>INPUT</Text>
          </View>
          <View style={styles.userView}>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_lightbulb_Color.png")}
            />
            <Text style={styles.subText}>
              What is a District Fundraising Initiative (DFI)?
            </Text>
            <TextInput
        style={{height: 40}}
        placeholder="Type here to type!"
      />
            <Button
          title="Press me"
          />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },

  descText: {
    fontSize: 15,
    color: "black",
    textAlign: "left",
  },

  bulText: {
    fontSize: 15,
    color: "black",
    textAlign: "left",
  },

  subText: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },

  endText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    position: "relative",
    top: "65%",
  },

  boldText: {
    fontWeight: "bold",
  },

  image: {
    position: "relative",
    width: 150,
    height: 150,
  },

  kiwanis: {
    position: "relative",
    width: 350,
    height: 80,
    right: 5,
    margin: -40,
  },

  userView: {
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  titleView: {
    backgroundColor: "rgba(0, 0, 128, 0.8)",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 10,
  },

  endView: {
    backgroundColor: "rgba(0, 0, 128, 0.8)",
    padding: 75,
  },
});
export default InputTest;
