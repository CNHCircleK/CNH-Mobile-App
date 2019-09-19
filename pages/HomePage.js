import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, SectionList, FlatList, TouchableOpacity } from 'react-native';
import PlainText from '@components/PlainText';
import Res from '@resources';

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
                <Image source={require('../resources/images/HomePage/FTC2019_LOGO.png')} style={styles.logo} />
                <Image source={require('../resources/images/HomePage/stc.jpg')} style={styles.trailer} />
                <SectionList
                    style={styles.navList}
                    renderItem={({ item, index, section }) => this.getItemRender(item, index, section)}
                    renderSectionHeader={({ section: { title } }) => this.getSectionTitleRender(title)}
                    sections={this.homeData}
                />
                <Text style={styles.siteButton}>{Res.strings.home.ftcWebsite}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#14314d'
    },
    logo: {
        position: 'absolute',
        width: 150,
        height: 150,
        top: 30,
        zIndex: 10,
        marginTop: 10
    },
    trailer: {
        marginTop: 150,
        height: 150,
        width: '100%'
    },
    navList: {
        paddingTop: 30,
    },
    navRow: {
        marginTop: 25,
        marginBottom: 30
    },
    navTitle: {
        marginLeft: 25,
        color: '#ffffff'
    },
    navButton: {
        marginLeft: 10,
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
        color: '#ffffff',
    },
    siteButton: {
        marginBottom: 100,
        color: '#ffffff'
    }
});
