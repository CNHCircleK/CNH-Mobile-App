import React, { Component } from 'react';
import { View, StyleSheet, SectionList, FlatList, Text, Image } from 'react-native';

export default class DistrictLeadershipPage extends Component {

    leadershipData = [
        {
            title: "Executive Board",
            data: [[
                {
                    title: "District Governor",
                    name: "Katherine Thy Hoang",
                    school: "UC Irvine",
                    email: "governor@cnhcirclek.org",
                },
                {
                    title: "District Governor",
                    name: "Katherine Thy Hoang",
                    school: "UC Irvine",
                    email: "governor@cnhcirclek.org",
                },
                {
                    title: "District Governor",
                    name: "Katherine Thy Hoang",
                    school: "UC Irvine",
                    email: "governor@cnhcirclek.org",
                }
            ]]
        }
    ]

    getSectionTitleRender(title) {
        return (
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        ); 
    }

    getItemRender(item) {
        return (
            <FlatList
                horizontal={false}
                numColumns={2}
                data={item}
                renderItem={({item}) =>
                    <View style={styles.item}>
                        <Image source={require('../resources/images/districtleadership/KatherineThyHoang.jpg')} style={styles.image} />
                        <Text style={styles.itemText}>{item.title}</Text>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.school}</Text>
                        <Text style={styles.itemText}>{item.email}</Text>
                    </View>
                }
            />
        );
    }
    
    render() {
       return (
            <View style={styles.container}>
                <SectionList
                    stickySectionHeadersEnabled={false}
                    renderItem={({item}) => this.getItemRender(item)}
                    renderSectionHeader={({section: {title}}) => this.getSectionTitleRender(title)}
                    sections={this.leadershipData}
                    style={styles.list}
                />            
            </View>
       );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    titleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode: 'cover'
    },
    item: {
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemText: {
        textAlign: 'center'
    }
});


