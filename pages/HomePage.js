import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, SectionList, FlatList } from 'react-native';
import PlainText from '../components/PlainText';

export default class HomePage extends Component {
    homeData = [
        {
            title: "news",
            data: [["teaser trailer", "committee", "office hours"]]
        }, 
        {
            title: "know before you go",
            data: [["packing list", "code of conduct", "faq"]]
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
                renderItem={({item}) => 
                    <ImageBackground source={require("../resources/homepage/hint_papers.png")} style={styles.navButton}>
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
                <Image source={require("../resources/homepage/ftc_logo.png")} style={styles.logo} /> 
                <Image source={require("../resources/homepage/stc.jpg")} style={styles.trailer} /> 
                <SectionList
                    style={styles.navList}
                    renderItem={({ item, index, section }) => this.getItemRender(item, index)}
                    renderSectionHeader={({ section: {title} }) => this.getSectionTitleRender(title)}
                    sections={this.homeData}
                />
                <Text style={styles.siteButton}>view ftc website</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#14314D"
    },
    logo: {
        position: "absolute",
        width: 150,
        height: 150,
        top: 30,
        zIndex: 10,
        marginTop: 10
    },
    trailer: {
        marginTop: 150,
        height: 150,
        width: "100%"
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
        color: "#FFFFFF"
    },
    navButton: {
        marginLeft: 10,
        width: 150,
        height: 150
    },
    navButtonTextContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    navButtonText: {
        fontSize: 13,
        color: "#FFFFFF",
    },
    siteButton: {
        marginBottom: 100,
        color: "#FFFFFF"
    }
}); 