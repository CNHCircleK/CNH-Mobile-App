import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';

export default class HomePage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
           <View style={styles.container}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollView}
                >
                    <View style={styles.itemcontainer}>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("FTC Schedule") }>
                            <Text style={styles.itemText}>Fall Training Conference</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemcontainer}>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("About Us") }>
                            <Text style={styles.itemText}>About Us</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemcontainer}>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("Fundraising Initiatives") }>
                            <Text style={styles.itemText}>Fundraising Initiatives</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("MRP") }>
                            <Text style={styles.itemText}>MRP</Text>
                        </TouchableOpacity>                       
                    </View>
                    <View style={styles.itemcontainer}> 
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("District Leadership") }>
                            <Text style={styles.itemText}>District Leadership</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={ () => navigate("Resources") }>
                            <Text style={styles.itemText}>Resources</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
           </View>
       );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },  
    itemcontainer: {
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        height: 150,
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8
    },
    itemText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
});


