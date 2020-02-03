import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, SectionList, FlatList,
  TouchableOpacity, TouchableWithoutFeedback, Linking, Modal, SafeAreaView,
  Platform} from 'react-native';
import { Video } from 'expo-av';
import PlainText from '@components/PlainText';
import Res from '@resources';
import Icon from 'react-native-vector-icons/Ionicons';

/* First page in app
   Shows FAQ, Leadership Opportunites, Find out more, and link to Event Page Website
   Has navbar to Schedule and Map */
export default class HomePage extends Component {
    state = {
        modalVisible: false
    };
    
    /**
     * Modal toggle used for FTC easter egg. Can be used to display stuff on the home page if needed
     */
    setModalVisible(visible) {
      this.setState({ modalVisible: visible });
    }

    /**
     * Load resources from res/strings to layout as tiles on the homescreen
     */
    homeData = [
        {
            title: Res.strings.home.titleKnow,
            data: [Object.keys(Res.strings.home.cateKnow)],
            screens: Res.strings.home.cateKnow
        },
        {
            title: Res.strings.home.titleLeadership,
            data: [Object.keys(Res.strings.home.cateLeadership)],
            screens: Res.strings.home.cateLeadership
        },
        {
            title: Res.strings.home.titleNews,
            data: [Object.keys(Res.strings.home.cateNews)],
            screens: Res.strings.home.cateNews
        }
    ]

    /**
     * Control tile render here (e.g. If a button's section.screens[item] has 'http' in it, link it to a URL instead)
     *
     * @param item - an array of (object) names of tiles, i.e. refers to object names in res/strings::section.screens
     * @param index - row index used by SectionList for unique key purposes
     * @param section - homepage data
     */
    getItemRender(item, index, section) {
        const {navigate} = this.props.navigation;
        return (
            <FlatList
                style={styles.navRow}
                horizontal
                showsHorizontalScrollIndicator={false}
                key={index}
                data={item}
                renderItem={({ item }) =>
                <TouchableOpacity onPress={() => section.screens !== undefined && (section.screens[item].includes("http") ? Linking.openURL(section.screens[item]) : navigate(section.screens[item]))}>
                    <ImageBackground source={require('../resources/images/HomePage/hint_papers.png')} style={styles.navButton}>
                        <View style={styles.navButtonTextContainer}>
                            <Text style={styles.navButtonText}>{item}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                }
            />
        );
    }

    /**
     * Control section header render here (the name of the section on top of each row of tiles)
     */
    getSectionTitleRender(title) {                          
        return (
            <PlainText style={styles.navTitle}>{title}</PlainText>
        );
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.modalVisible}
                  >
                  <View style={styles.eggContainer}>
                      <TouchableWithoutFeedback onPress={()=>this.setModalVisible(false)}>
                          <Image style={styles.egg} resizeMode="contain" source={require('../resources/images/HomePage/detective.png')} />
                      </TouchableWithoutFeedback>
                  </View>
                </Modal>
                <TouchableOpacity style={styles.logo} onPress={()=>{this.setModalVisible(true)}}>
                    <Image source={require('../resources/images/HomePage/ftc_logo.png')} style={styles.logo} />
                    </TouchableOpacity>
                <Video
                  source={require('../resources/videos/Homepage-Call-to-FTC.mp4')}
                  rate={1.0}
                  isMuted={true}
                  resizeMode="cover"
                  shouldPlay
                  isLooping
                  style={ styles.trailer }
                />
                <SectionList
                    stickySectionHeadersEnabled={false}
                    style={styles.navList}
                    renderItem={({ item, index, section }) => this.getItemRender(item, index, section)}
                    renderSectionHeader={({ section: { title } }) => this.getSectionTitleRender(title)}
                    sections={this.homeData}
                />
                <View style={styles.siteBar}>
                    <TouchableOpacity style={styles.siteButton} onPress={() => Linking.openURL('https://ftc.cnhcirclek.org/')}>
                        <Text style={styles.siteButtonText}>{Res.strings.home.ftcWebsite}</Text>
                        <Icon name='md-open' size={18} color={'black'} />
                    </TouchableOpacity>
                </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: '#1a1d32'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1a1d32'
    },
    logo: {
        position: 'absolute',
        width: 150,
        height: 150,
        top: 0,
        zIndex: 10,
        marginTop: 0
    },
    trailer: {
        marginTop: 90,
        height: 150,
        width: '100%'
    },
    navList: {
        paddingTop: 20
    },
    navRow: {
        marginTop: -5,
        marginBottom: 10
    },
    navTitle: {
        marginLeft: 25,
        fontFamily: 'Musket-Regular',
        fontSize: 20,
        color: '#ffffff'
    },
    navButton: {
        marginLeft: 5,
        width: 150,
        height: 150
    },
    navButtonTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    navButtonText: {
        fontSize: 13,
        fontFamily: 'Cabin-Regular',
        color: '#ffffff',
    },
    siteBar: {
        width: "100%",
        backgroundColor: "#aaaaaa",
        paddingVertical: 8
    },
    siteButton: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    siteButtonText: {
        fontFamily: 'Musket-Regular',
        color: 'black',
        marginRight: 8,
        alignSelf: 'center'
    },
    eggContainer: {
        alignItems: 'center',
        marginTop: 100,
        justifyContent: 'center',
        height: 500,
    },
    egg: {
        width: "75%"
    }
});
