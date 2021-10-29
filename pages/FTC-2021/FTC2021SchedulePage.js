import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Modal, Image, Linking, Platform } from 'react-native';
import { getData } from '../../utils/Firebase';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTimeString } from '../../utils/Misc';
//import Res from '../../resources/res';

export default class FTC2021SchedulePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scheduleData: [],
            scheduleDescriptions: [],
            curDay: 5,
            modalVisible: false,
            modalTitle: '',
            modalDesc: ''
        };
    }

    componentDidMount = async () => {
        await this.setSchedule();
        await this.setDescriptions();
        await this.setCachedWorkshops();
        
        this.navigationListener = this.props.navigation.addListener('focus', async () => {
            await this.setSchedule();
            await this.setDescriptions();
            await this.setCachedWorkshops();
        });
    };

    componentWillUnmount = () => {
        this.navigationListener();
    };

    setSchedule = async () => {
        let updatedSchedule = await getData('dcon-schedule');

        updatedSchedule.forEach((event, index) => {
            updatedSchedule[index].startTime = updatedSchedule[index].startTime.toDate();
            updatedSchedule[index].endTime = updatedSchedule[index].endTime?.toDate();
        });

        updatedSchedule.forEach((event, index) => {
            if (event.workshop)
                AsyncStorage.setItem('Workshop ' + event.workshop + ' Index', index.toString());
        })

        this.setState({scheduleData: updatedSchedule});
    };

    setDescriptions = async () => {
        let updatedDescriptions = await getData('dcon-schedule-descriptions', undefined, undefined, undefined, [{field: "schedule", op: "==", value: true}]);
        
        this.setState({scheduleDescriptions: updatedDescriptions});
    };

    setCachedWorkshops = async () => {
        let schedule = this.state.scheduleData;

        try {
            for (let i = 1; i <= 6; i++) {
                let workshopData = await AsyncStorage.getItem('Workshop ' + i);
                if (workshopData != null) {
                    workshopData = JSON.parse(workshopData);

                    let workshopIndex = await AsyncStorage.getItem('Workshop ' + i + ' Index');
                    workshopIndex = parseInt(workshopIndex);
                    
                    let updatedWorkshopData = await getData('dcon-schedule-descriptions', undefined, undefined, undefined, [{field: "title", op: "==", value: workshopData.title}]);

                    schedule[workshopIndex].title = updatedWorkshopData[0].title;
                    schedule[workshopIndex].location = updatedWorkshopData[0].link;
                }
            }
        } catch (e) {
            console.log(e);
        }

        this.setState({scheduleData: schedule});
    };

    getCurSchedule = (day) => {
        if (this.state.scheduleData.length == 0)
            return [];

        let filteredSchedule = this.state.scheduleData.filter(event => {
            return event.startTime.getDay() === day;
        });

        return filteredSchedule;
    };

    navigateDetails = (workshop) => {
        this.props.navigation.navigate('Schedule Details', {session: workshop});
    };

    setModal = (title) => {
        let filteredDescriptions = this.state.scheduleDescriptions.filter(desc => {
            return desc.title === title;
        });

        this.setState({modalTitle: filteredDescriptions[0].title, modalDesc: filteredDescriptions[0].description});
        this.setState({modalVisible: true});
    };

    renderEvent = ({item}) => {
        if (item.break) {
            return (
                <View style={{...styles.eventItem, borderRadius: 0}}>
                    <View style={styles.eventBreakLeft}>
                        <Image style={styles.eventBreakImage} source={require('../../resources/DCON_2021/Images/happy.png')}/>
                    </View>
                    <View style={styles.eventBreakRight}>
                        <Text style={styles.eventBreakText}>{item.title}</Text>
                    </View>
                </View>
            );
        }

        let startTime;
        let endTime;
        
        if (Platform.OS === 'ios') {
            startTime = item.startTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'});
            endTime = item.endTime?.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})
        } else {
            startTime = getTimeString(item.startTime);
            endTime = item.endTime ? getTimeString(item.endTime) : undefined;
        }

        return (
            <h2> Test </h2>
        );
    };

    render() {
        return (
            <h2> Test </h2>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,
        marginHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 30,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.50,
        backgroundColor: 'white',
        elevation: 10,
    },
    modalCloseContainer: {
        alignSelf: 'flex-end'
    },
    modalClose: {
        width: 14,
        height: 14
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    modalDesc: {
        fontSize: 14
    },
    contentContainer: {
        paddingBottom: 20
    },
    eventItem: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.15,
        backgroundColor: 'white',
        elevation: 10,
    },
    eventBreakLeft: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    eventBreakRight: {
        flex: 0.8,
        paddingVertical: 10,
        paddingLeft: 4,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    eventBreakImage: {
        width: 50,
        height: 50,
    }, 
    eventBreakText: {
        fontWeight: '300'
    },  
    eventLeft: {
        flex: 0.3,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    eventMiddle: {
        flex: 0.6,
        paddingLeft: 20,
        paddingVertical: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    eventRight: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    eventIcon: {
        height: 14,
        resizeMode: 'contain'
    },
    eventTime: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'
    },
    eventTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    },
    eventLocation: {
        fontStyle: 'italic',
        fontSize: 14,
        fontWeight: '300'
    },
    swiperContainer: {
        height: 250,
        marginBottom: 10
    }, 
    swiper: {
        backgroundColor: Res.DCONColors.Polar
    },
    swiperCard: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 40,
        paddingBottom: 50
    },
    slideText: {
        width: 150,
        fontWeight: '300',
        paddingLeft: 5
    },
    slideDayText: {
        fontSize: 56,
        color: Res.DCONColors.JellyBean
    },
    slideImage: {
        position: 'absolute',
        resizeMode: 'contain',
        width: 250,
        height: 250,
        right: -10,
        bottom: -20
    },
    workshopButton: {
        backgroundColor: Res.DCONColors.Gold,
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    workshopButtonText: {
        fontSize: 12,
        fontWeight: 'bold'
    }
});