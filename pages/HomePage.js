import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, SectionList, FlatList } from 'react-native';
import PlainText from '../components/PlainText';
import { HomeStrings } from '../resources/strings';

export default class HomePage extends Component {
    homeData = [
        {
            title: HomeStrings.titleNews,
            data: [HomeStrings.cateNews]
        }, 
        {
            title: HomeStrings.titleKnow,
            data: [HomeStrings.cateKnow]
        },
        {
            title: HomeStrings.titleLeadership,
            data: [HomeStrings.cateLeadership]
        }
    ]

    getItemRender(item, index) {
        return (
            <FlatList 
                style={styles.navRow}
                horizontal
                showsHorizontalScrollIndicator={false}
                key={index}
                data={item}
                renderItem={({ item }) => 
                    <ImageBackground source={require('../resources/images/HomePage/hint_papers.png')} style={styles.navButton}>
                        <View style={styles.navButtonTextContainer}>
                            <Text style={styles.navButtonText}>{item}</Text>
                        </View>
                    </ImageBackground>
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
                    renderItem={({ item, index, section }) => this.getItemRender(item, index)}
                    renderSectionHeader={({ section: { title } }) => this.getSectionTitleRender(title)}
                    sections={this.homeData}
                />
                <Text style={styles.siteButton}>{HomeStrings.ftcWebsite}</Text>
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