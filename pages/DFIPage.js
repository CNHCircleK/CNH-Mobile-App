import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

class DFIPage extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.titleView}>
            <Text style={styles.logoText}>Fundraising Initiatives</Text>
          </View>
          <View style={styles.userView}>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_lightbulb_Color.png")}
            />
            <Text style={styles.subText}>
              What is a District Fundraising Initiative (DFI)?
            </Text>
            <Text style={styles.descText}>
              They are the 3 causes that the Cal-Nev-Ha District of Circle K
              support through fundraising! These three causes are The Trevor
              Project, Kiwanis Family House, and Pediatric Trauma Program.
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_fifun_Color.png")}
            />
            <Text style={styles.subText}>The Trevor Project</Text>
            <Text style={styles.descText}>
              The Trevor Project is the leading national organization providing
              crisis intervention and suicide prevention services to lesbian,
              gay, bisexual, transgender, queer & questioning youth.
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_kiwanis_family_house_Color.png")}
            />
            <Text style={styles.subText}>Kiwanis Family House</Text>
            <Text style={styles.descText}>
              The Kiwanis Family House strives to provide housing and support to
              families of seriously ill or injured children and adults being
              treated at the UC Davis Medical Center in Sacramento, CA. The
              funds raised will go towards providing additional resources and
              improve the stay for these families so that they can be there to
              support.
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_kids_Color.png")}
            />
            <Text style={styles.subText}>Pediatric Trauma Program</Text>
            <Text style={styles.descText}>
              The Pediatric Trauma Program aims to develop local projects which
              will reduce the number of children who are killed or injured by
              trauma. These projects include promoting community outreach,
              providing education materials, and assisting partner hospitals.
              The funds raised will go towards the end goal of preventing
              unintentional injury and death as well as providing safety items
              for children. {"\n"}
            </Text>
          </View>
          <View style={styles.endView}>
            <Image
              style={styles.kiwanis}
              source={require("../resources/images/AboutUsIcon/KSLP_white.png")}
            />
            <Text style={styles.endText}>
              © 2000 - 2020 California-Nevada-Hawaii District of Circle K
              International. All rights reserved.
            </Text>
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
export default DFIPage;
