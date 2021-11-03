import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Modal, Image, Linking, Platform } from 'react-native';
import { getData } from '../../utils/Firebase';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTimeString } from '../../utils/Misc';
import Res from '@resources';

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
                        <Image style={styles.eventBreakImage} source={require('../../resources/FTC_2021/Icons/Sakura_Fish.png')}/>
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
            <View style={styles.eventItem}>
                <View style={{...styles.eventLeft, backgroundColor: item.workshop ? Res.FTCColors.Yellop : Res.FTCColors.LightPurple}}>
                    <Text style={styles.eventTime}>{startTime} {endTime ? '- ' + endTime : ''}</Text>
                </View>
                <View style={styles.eventMiddle}>
                    <Text style={styles.eventTitle}>{item.title}</Text>
                    {item.workshop ? 
                        <TouchableOpacity style={{...styles.workshopButton, marginBottom: 10}} onPress={async () => await Linking.openURL(item.location)}>
                            <Text style={styles.workshopButtonText}>GO TO WORKSHOP</Text>
                        </TouchableOpacity> :
                        <Text style={styles.eventLocation}>{item.location}</Text>
                    }
                    
                </View>
                <TouchableOpacity style={styles.eventRight} onPress={() => {
                    if (item.workshop) this.navigateDetails(item.workshop);
                    if (item.description) this.setModal(item.title);
                }}>
                    {item.workshop || item.description ?
                        <Image 
                            style={styles.eventIcon} 
                            source={item.workshop ?
                                require('../../resources/DCON_2021/Icons/arrow_icon.png') :
                                require('../../resources/DCON_2021/Icons/info_icon.png')}
                        />
                        :
                        <></>
                    }
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.modalCloseContainer} onPress={() => this.setState({modalVisible: false})}>
                            <Image style={styles.modalClose} source={require('../../resources/DCON_2021/Icons/exit_icon.png')} />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>{this.state.modalTitle}</Text>
                        <Text style={styles.modalDesc}>{this.state.modalDesc}</Text>
                    </View>
                </Modal>
                <View style={styles.swiperContainer}>
                    <Swiper style={styles.swiper} activeDotColor={Res.FTCColors.Yellop} onIndexChanged={(index) => this.setState({curDay: (index + 5) % 7})}>
                        <View style={styles.swiperCard}>
                            <Image style={styles.slideImage} source={require('../../resources/FTC_2021/Icons/Frog_Golem.png')}/>
                            <Text style={styles.slideText}>FALL TRAINING</Text>
                            <Text style={styles.slideText}>CONFERENCE 2021</Text>
                            <Text style={styles.slideDayText}>Friday</Text>
                            <Text style={styles.slideText}>November 5, Day 1</Text>
                        </View>
                        <View style={styles.swiperCard}>
                            <Image style={styles.slideImage} source={require('../../resources/FTC_2021/Icons/Axolotl.png')}/>
                            <Text style={styles.slideText}>FALL TRAINING</Text>
                            <Text style={styles.slideText}>CONFERENCE 2021</Text>
                            <Text style={styles.slideDayText}>Saturday</Text>
                            <Text style={styles.slideText}>November 6, Day 2</Text>
                        </View>
                        <View style={styles.swiperCard}>
                            <Image style={styles.slideImage} source={require('../../resources/FTC_2021/Icons/Birb_fish.png')}/>
                            <Text style={styles.slideText}>FALL TRAINING</Text>
                            <Text style={styles.slideText}>CONFERENCE 2021</Text>
                            <Text style={styles.slideDayText}>Sunday</Text>
                            <Text style={styles.slideText}>November 7, Day 3</Text>
                        </View>
                    </Swiper>
                </View>
                <FlatList
                    data={this.getCurSchedule(this.state.curDay)}
                    renderItem={this.renderEvent}
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
        backgroundColor: Res.FTCColors.Darpz,
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
        backgroundColor: Res.FTCColors.Liptz,
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
        height: 20,
        right: 10,
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
        backgroundColor: Res.FTCColors.LightPurple,

    },
    swiperCard: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 40,
        paddingBottom: 50,
        backgroundColor: Res.FTCColors.Darpz,
        borderColor: Res.FTCColors.Grabt,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    slideText: {
        fontFamily: "SpaceGroteskBold",
        fontWeight: '300',
        fontSize: 18,
        marginBottom: 10,
        top: 10,
        right: 5,
        color: Res.FTCColors.Eggshell,
    },
    slideDayText: {
        fontFamily: "Facultad",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "left",
        letterSpacing: 2,
        color: Res.FTCColors.Yellop,
        width: 300,
        top: 10,
        right: 5,
    },
    slideImage: {
        position: 'absolute',
        resizeMode: 'contain',
        width: 175,
        height: 175,
        right: -10,
        top: 60
    },
    workshopButton: {
        alignSelf: 'center',
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: Res.FTCColors.Yellop,
        borderRadius: 4
    },
    workshopButtonText: {
        fontSize: 12,
        fontFamily: 'Facultad'
    }
});