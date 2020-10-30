import React, { useState, useCallback, Component } from 'react';
import { Text, View, SectionList, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';

const DATA = [
    {
      title: "Photobombers",
      data: ["Chio Saeyang","Placeholder Teammate"]
    },
    {
      title: "Rapid Blinkers",
      data: ["Jenny Savin",]
    },
    {
      title: "Vintage Vixens",
      data: ["Chloe O’Connor",]
    },
    {
      title: "Blurry Beauties",
      data: ["Kristina Matsumoto",]
    },
    {
        title: "Red Eyes",
        data: ["Alan Garduno",]
    },
    {
        title: "Home-Movie Makers",
        data: ["Derek Baylis",]
    },
    {
        title: "Scrapbookers",
        data: ["Anne Le",]
    },
    {
        title: "Forever Filmers",
        data: ["Jamie Ly",]
    },
    {
        title: "Magnificent Memoirs",
        data: ["Olivia Chang",]
    },
    {
        title: "Simpy Storytellers",
        data: ["Jack Chen",]
    },
    {
        title: "Amazing Anecdotes",
        data: ["Brandon Kincaid",]
    },
    {
        title: "Forget-Me-Nots",
        data: ["Kathleen Panganiban",]
    },
    {
        title: "Trippy Tripods",
        data: ["Vanessa Vidas",]
    },
    {
        title: "Past Polaroids",
        data: ["Nicolas Wright",]
    },
    {
        title: "Crafty Cameras",
        data: ["Daniela Mena",]
    },
    {
        title: "Selfie Stars",
        data: ["Sophia Herrera",]
    },
    {
        title: "Peace Signers",
        data: ["Joyce Wu",]
    },
    {
        title: "Collage Creators",
        data: ["Aviel Geronimo",]
    },
    {
        title: "Flashback Frenzies",
        data: ["Joshua De Leon",]
    },
    {
        title: "Recollections",
        data: ["Josephine Pham",]
    },
    {
        title: "Throwback Thursdays",
        data: ["Douglas Takeshi Shimizu",]
    },
    {
        title: "Souvenir-Snaps",
        data: ["Heyley Pavon",]
    },
    {
        title: "Loyal Legacies",
        data: ["Jonathan Guan",]
    },
    {
        title: "Shimmering Smiles",
        data: ["Elizabeth Mazuca",]
    },
    {
        title: "Commemorative Captures",
        data: ["Audrey Halim",]
    },
    {
        title: "Nostalgics",
        data: ["Johnny Le",]
    },
    {
        title: "Unforgettables",
        data: ["Alfred Aung",]
    },
    {
        title: "Passionate Photographers",
        data: ["Aerrow Cruz",]
    },
    {
        title: "Freeze Frames",
        data: ["Audrey Abbott"]
    },
  ];

export default class FTCTeamPage extends Component {

    renderItem = ({item, index}) => {
        if (index == 0) {
            return(
                <TouchableOpacity style={styles.capItem}>
                    <Text style={styles.capText}>{item}</Text>
                </TouchableOpacity>
            );
        }
        return (
            <TouchableOpacity style={styles.teamItem}>
                <Text style={styles.teamText}>{item}</Text>
            </TouchableOpacity>
        );
    };

    renderSectionHeader = ({section: { title }}) => {
        return (
        <Text style={styles.titleText}>{title}</Text>
        );
    };

    render() {
        return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleShape}>
                <Text style = {styles.titleText}>FTC Teams</Text>
            </View>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={this.renderItem}
                renderSectionHeader={this.renderSectionHeader}
            />
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#757D84'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#E9C99C'
    },
    titleShape: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#704346"
    },
    teamTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#E9C99C'
    },
    teamText: {
        fontSize: 20,
        color: 'black',
        marginTop: 5
    },
    capText: {
        fontSize: 20,
        color: 'black',
        marginTop: 5
    },
    teamItem: {
        backgroundColor: '#E3AEA8',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 20
    },
    capItem: {
        backgroundColor: '#94C9A9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 20
    },
})