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
import Hyperlink from "react-native-hyperlink";

class AboutPage extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.titleView}>
            <Text style={styles.logoText}>About Us</Text>
          </View>
          <View style={styles.userView}>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_lightbulb_Color.png")}
            />
            <Text style={styles.descText}>
              Circle K International began as a Kiwanis club service project to
              provide an opportunity for capable, ambitious, and worthy young
              men to acquire a college education by assisting them, where
              necessary, with their financial problems; by means of a
              scholarship fund, if available, or securing part-time employment.
              Additionally, affording its members a useful training in the
              social graces of a well-rounded personality was a focus area for
              CKI. Soon after the concept of CKI was recognized and accepted,
              the element of community service was introduced to CKI, thus
              creating an appealing outlet for collegians around the globe.
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_location_Color.png")}
            />
            <Text style={styles.descText}>
              Today, as the largest collegiate service organization, CKI boasts
              a membership of more than 13,000 collegians on nearly 550 campuses
              worldwide. CKI is a student-led organization with an International
              Board of Trustees elected by its membership each year. Embodied by
              its tenets of leadership, fellowship, and service at the club,
              district, and International levels, CKI continues to grow through
              service to the world’s campuses and communities.
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_star_Color.png")}
            />
            <Text style={styles.descText}>
              Circle K International has grown tremendously over the past 40
              years, sometimes in spirit, sometimes in members, and still other
              times in service to the community. Circle K International is
              continuing to move toward ever-increasing service and leadership
              development as well as providing fellowship and personal growth to
              the members. Though history provides a good foundation from which
              to view achievements and obstacles, Circle K International must
              connect the organization’s mission with tomorrow’s college
              students and tomorrow’s student organizations to envision the
              possibilities for the organization and realize its dream of
              creating a better world in which to live.
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_clock_Color.png")}
            />
            <Text style={styles.subText}>Circle K Timeline</Text>
            <Text style={styles.bulText}>
              <Text style={styles.boldText}>1936:</Text> Circle K concept
              presented at the collegiate level at Washington State University.
              <Text style={styles.boldText}>{"\n"}1947:</Text> First CKI Club
              chartered at Carthage College, Illinois.
              <Text style={styles.boldText}>{"\n"}1949:</Text> CKI becomes an
              International organization with the chartering of a club at the
              University of Western Ontario.
              <Text style={styles.boldText}>{"\n"}1952:</Text> Wally Miller of
              San Diego State becomes first elected president of CKI.
              <Text style={styles.boldText}>{"\n"}1953:</Text> Kenneth B. Creasy
              of Ohio Wesleyan University elected as president of CKI. 1955: CKI
              Constitution and Bylaws adopted.
              <Text style={styles.boldText}>{"\n"}1957:</Text> Texas-Oklahoma
              becomes first district of CKI.
              <Text style={styles.boldText}>{"\n"}1971:</Text> Females welcomed
              into CKI. 1982: CKI memberships surpasses 14,500 members.
              <Text style={styles.boldText}>{"\n"}1999:</Text> CKI leadership
              dedicates year as the Year of Service.
              <Text style={styles.boldText}>{"\n"}2000:</Text> Members of CKI
              surpass the $420,000 mark in the effort to eliminate iodine
              deficiency disorders.
              <Text style={styles.boldText}>{"\n"}2005:</Text> Marks the 50th
              Anniversary of CKI.
              <Text style={styles.boldText}>{"\n"}2007:</Text> CKI announces its
              international fundraiser, Saving Lives: The Six Cents Initiative,
              which focuses on getting clean water to children who need it most.
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_mde_Color.png")}
            />
            <Text style={styles.subText}>Mission Statement</Text>
            <Text style={styles.bulText}>
              Circle K International is for college and university students who
              are responsible citizens and leaders with a lifelong commitment to
              community service worldwide. Circle K inspires people to better
              our world. Its motto, the same as Kiwanis International’s, is “We
              Build.” Circle K provides constructive opportunities for students
              to become involved on their campuses and communities through
              service work to others in need. Circle K members have the chance
              to work with fellow students, children in the community, and other
              adults in need of special programs.{"\n"}
              {"\n"} In support of this, we are committed to: {"\n"}
              {"\n"} <Text>{"\u2B24"}</Text> Collaborating with all members of
              the Kiwanis family to achieve our common objectives;
              {"\n"} <Text>{"\u2B24"}</Text> Continuing student management of
              organization on all levels;
              {"\n"} <Text>{"\u2B24"}</Text> Developing positive role models
              {"\n"} <Text>{"\u2B24"}</Text> Enhancing inter-cultural
              understanding and cooperation;
              {"\n"} <Text>{"\u2B24"}</Text> Increasing our service potential;
              {"\n"} <Text>{"\u2B24"}</Text> Providing opportunities for
              fellowship, personal growth, and professional development;
              {"\n"} <Text>{"\u2B24"}</Text> Working toward greater public
              recognition of the organization.
            </Text>
            <Text style={styles.subText}>{"\n"}Our Tenets</Text>
            <StatusBar style="auto" />
            <Text style={styles.descText}>
              As the largest collegiate community service organization
              worldwide, Circle K International embraces three tenets that
              define the Circle K experience. The three tenets are as follows:{" "}
              {"\n"}
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_service_Color.png")}
            />
            <Text style={styles.subText}>Service</Text>
            <Text style={styles.descText}>
              As one of the three tenets, service is the fundamental element of
              Circle K International. Collectively, Circle K members perform
              more than one million hours of service on their campuses and in
              their communities annually. Without service, Circle K
              International would be just another campus activity. Through
              service, college students are making the world a better place one
              service project at a time. Together, Circle K’ers truly make a
              difference in the community.
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_leadership_Color.png")}
            />
            <Text style={styles.subText}>Leadership</Text>
            <Text style={styles.descText}>
              Through the mission and vision of the organization, Circle K
              International is dedicated to the realization of humankind’s
              potential. The potential of Circle K International lies in its
              ability to positively influence members of society who are facing
              personal decisions and those who will one day create the vision of
              mankind for generations to come. Members can assume leadership
              responsibilities at all levels of the organization while actively
              contributing to their respective clubs, divisions, and
              communities. The unique experiences offered by Circle K truly
              develop and bring out the leader within each individual.
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_fellowship_Color.png")}
            />
            <Text style={styles.subText}>Fellowship</Text>
            <Text style={styles.descText}>
              If there is one thing that Circle K’ers know best, it is
              fellowship. Whether they are planning a car wash, reading to
              three-year-olds, or conducting business, Circle K members across
              the globe take time to meet and welcome new people. Members
              experience genuine fellowship and develop life-long relationships
              with fellow collegians, advisors, Kiwanians and citizens in their
              communities. Whether they are mentoring a child, networking with a
              businessman, or bowling with members, that member is developing
              social skills, networking, and strengthening relationships.
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_outreach_Color.png")}
            />
            <Text style={styles.subText}>Pledge</Text>
            <Text style={styles.descText}>
              I pledge to uphold the objects of Circle K International, To
              foster compassion and goodwill toward others through service and
              leadership To develop my abilities and the abilities of all people
              And to dedicate myself to the realization of mankind’s potential.
            </Text>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_kiwanis_Color.png")}
            />
            <Hyperlink
              linkDefault
              linkStyle={{ color: "#2980b9", fontSize: 15 }}
              linkText={(url) =>
                url === "https://www.circlek.org/" ? "website" : url
              }
            >
              <Text style={styles.subText}>Objects</Text>
              <Text style={styles.bulText}>
                Furthermore, Circle K International encompasses and embraces the
                following objects:
                {"\n"}
                {"\n"}
                <Text>{"\u2B24"}</Text>To emphasize the advantages of the
                democratic way of life; To provide the opportunity for
                leadership training in service; To serve on the campus and in
                the community;
                {"\n"}
                <Text>{"\u2B24"}</Text>And many other objects, which can be
                found on the Circle K International https://www.circlek.org/.
              </Text>
            </Hyperlink>
            <Image
              style={styles.image}
              source={require("../resources/images/AboutUsIcon/icon_networking_Color.png")}
            />
            <Text style={styles.subText}>Vision</Text>
            <Text style={styles.descText}>
              To be the leading global community-service organization on college
              and university campuses that enriches the world one member, one
              child and one community at a time.{"\n"}
            </Text>
            <Text style={styles.subText}>Our Motto</Text>
            <Text style={styles.descText}>
              Live to serve, love to serve.{"\n"}
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
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
    position: "absolute",
    margin: 20,
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
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 10,
  },

  endView: {
    backgroundColor: "rgba(0, 0, 128, 0.8)",
    padding: 75,
  },
});

export default AboutPage;
