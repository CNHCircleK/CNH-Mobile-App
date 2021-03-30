import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Linking, Image } from 'react-native';
import { getData } from "../../utils/Firebase";
import Res from '@resources';

export default class DCONScheduleDetailsPage extends Component {
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
                <Text style={styles.workshopHosts}>Hosted by {item.hosts}</Text>
                <Text style={styles.workshopDesc}>{item.description}</Text>
                <TouchableOpacity style={{...styles.workshopButton, marginBottom: 10}} onPress={async () => await Linking.openURL(item.link)}>
                    <Text style={styles.workshopButtonText}>GO TO WORKSHOP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.workshopButton} onPress={() => this.updateSelectedWorkshop(item)}>
                    <Text style={styles.workshopButtonText}>ADD TO SCHEDULE</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.backImage} source={require('../../resources/DCON_2021/Icons/back_icon.png')}/>
                    </TouchableOpacity>
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
        flex: 1
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
        fontWeight: 'bold',
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
        backgroundColor: 'white'
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
        backgroundColor: Res.DCONColors.Gold,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    workshopButtonText: {
        fontSize: 12,
        fontWeight: 'bold'
    }
});