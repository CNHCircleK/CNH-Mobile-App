import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, SectionList, FlatList, TouchableOpacity, Linking } from 'react-native';
import PlainText from '@components/PlainText';
import Res from '@resources';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HomePage extends Component {
    homeData = [
        {
            title: Res.strings.home.titleNews,
            data: [Res.strings.home.cateNews],
        },
        {
            title: Res.strings.home.titleKnow,
            data: [Object.keys(Res.strings.home.cateKnow)],
            screens: Res.strings.home.cateKnow
        },
        {
            title: Res.strings.home.titleLeadership,
            data: [Object.keys(Res.strings.home.cateLeadership)],
            screens: Res.strings.home.cateLeadership
        }
    ]

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
                <TouchableOpacity onPress={() => section.screens !== undefined && navigate(section.screens[item])}>
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

    getSectionTitleRender(title) {
        return (
            <PlainText style={styles.navTitle}>{title}</PlainText>
        );
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Image source={require('../resources/images/HomePage/ftc_logo.png')} style={styles.logo} />
                <Image source={require('../resources/images/HomePage/stc.jpg')} style={styles.trailer} />
                <SectionList
                    style={styles.navList}
                    renderItem={({ item, index, section }) => this.getItemRender(item, index, section)}
                    renderSectionHeader={({ section: { title } }) => this.getSectionTitleRender(title)}
                    sections={this.homeData}
                />
                <TouchableOpacity style={styles.siteButton} onPress={() => Linking.openURL('https://ftc.cnhcirclek.org/')}>
                    <Text style={styles.siteButtonText}>{Res.strings.home.ftcWebsite}</Text>
                    <Icon name='md-open' size={18} color={'#ffffff'} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1a1d32'
    },
    logo: {
        position: 'absolute',
        width: 120,
        height: 120,
        top: 10,
        zIndex: 10,
        marginTop: 10
    },
    trailer: {
        marginTop: 90,
        height: 150,
        width: '100%'
    },
    navList: {
        paddingTop: 20,
        marginBottom: 20
    },
    navRow: {
        marginTop: -5,
        marginBottom: 10
    },
    navTitle: {
        marginLeft: 25,
        fontFamily: 'Musket-Regular',
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
    siteButton: {
        marginBottom: 10,
        flexDirection: 'row'
    },
    siteButtonText: {
        fontFamily: 'Musket-Regular',
        color: '#ffffff',
        marginRight: 8
    }
});
