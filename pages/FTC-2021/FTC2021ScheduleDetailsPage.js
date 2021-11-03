import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Linking, Image } from 'react-native';
import { getData } from "../../utils/Firebase";
import Res from '@resources';

export default class FTC2021ScheduleDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: 0,
            workshops: []
        };
    }

    componentDidMount = async () => {
        let updatedSession = this.props.route.params.session;
        let updatedWorkshops = await getData('dcon-schedule-descriptions', undefined, undefined, undefined, [{field: "workshop", op: "==", value: updatedSession}]);

        this.setState({session: updatedSession, workshops: updatedWorkshops});
    };

    updateSelectedWorkshop = async (item) => {
        try {
            await AsyncStorage.setItem('Workshop ' + item.workshop, JSON.stringify(item));
        } catch(e) {
            console.log(e);
        }

        this.props.navigation.navigate('Schedule');
    };

    renderWorkshop = ({item}) => {
        return (
            <View style={styles.workshop}>
                <Text style={styles.workshopTitle}>{item.title}</Text>
                <Text style={styles.workshopHosts}>Hosted by {item.hosts} | Room {item.room}</Text>
                <Text style={styles.workshopDesc}>{item.description}</Text>
                <TouchableOpacity style={styles.workshopButton} onPress={() => this.updateSelectedWorkshop(item)}>
                    <Text style={styles.workshopButtonText}>+</Text>
                </TouchableOpacity>
               
               
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                  
                    <Text style={styles.sessionTitle}>Workshop Session #{this.state.session}</Text>
                    <View style={{width: 30, marginRight: 30}}></View>
                </View>
                <FlatList
                    data={this.state.workshops}
                    renderItem={this.renderWorkshop}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:  Res.FTCColors.Darpz
    },
    contentContainer: {
        paddingBottom: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 70,
        
    },
    backButton: {
        marginLeft: 30,
    },
    backImage: {
        width: 30,
        resizeMode: 'contain'
    },
    sessionTitle: {
        fontSize: 24,
        marginLeft: 80,
        fontWeight: 'bold',
        color: Res.FTCColors.Yellop,
        textAlign: 'center'
    },
    workshop: {
        marginHorizontal: 30,
        marginVertical: 15,
        padding: 25,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.15,
        backgroundColor: Res.FTCColors.Liptz
    }, 
    workshopTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10
    },
    workshopHosts: {
        fontStyle: 'italic',
        marginBottom: 15
    },
    workshopDesc: {
        marginBottom: 25
    },
    workshopButton: {
        alignSelf: 'flex-end',
        backgroundColor: Res.FTCColors.LightPurple,
        paddingHorizontal: 16,
        marginTop: 15,
        paddingVertical: 8
    },
    workshopButtonText: {
        fontSize: 16,
        //backgroundColor: Res.FTCColors.LightPurple,
        fontWeight: 'bold'
    }
});