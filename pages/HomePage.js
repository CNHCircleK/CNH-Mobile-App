import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class HomePage extends Component {

    homeData = [
        {
            title: "About Us",
            screen: "About Us"
        },
        {
            title: "Fundraising Initiatives",
            screen: "Fundraising Initiatives"
        },
        {
            title: "Resources",
            screen: "Resources"
        },
        {
            title: "MRF",
            screen: "MRF"
        },
        {
            title: "District Leadership",
            screen: "District Leadership"
        }
    ];

    getItemRender(item) {
        const {navigate} = this.props.navigation;
        return (
            <TouchableOpacity 
                onPress={() => {
                    navigate(item.screen);
                }}
                style={styles.homeItem}
            >
                <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
        );
    }

    render() {
       return (
           <View style={styles.container}>
                <FlatList
                    data={this.homeData}
                    renderItem={({item}) => this.getItemRender(item)}
                    horizontal={false}
                    numColumns={2}
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
    homeItem: {
        width: 150,
        height: 150,
        margin: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
});


