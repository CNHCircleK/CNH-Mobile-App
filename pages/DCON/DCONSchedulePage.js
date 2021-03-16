import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Modal, Image } from 'react-native';
import { getData } from '../../utils/Firebase';
import Swiper from 'react-native-swiper';

export default class DCONSchedulePage extends Component {
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
        let updatedSchedule = await getData('dcon-schedule');
        updatedSchedule.forEach((event, index) => {
            updatedSchedule[index].startTime = updatedSchedule[index].startTime?.toDate();
            updatedSchedule[index].endTime = updatedSchedule[index].endTime?.toDate();
        });

        let updatedDescriptions = await getData('dcon-schedule-descriptions', undefined, undefined, undefined, [{field: "schedule", op: "==", value: true}]);

        this.setState({scheduleData: updatedSchedule});
        this.setState({scheduleDescriptions: updatedDescriptions});
    };

    getCurSchedule = (day) => {
        let filteredSchedule = this.state.scheduleData.filter(event => {
            return event.startTime.getDay() === day;
        });

        return filteredSchedule;
    };

    navigateDetails = () => {

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
                        <Image style={styles.eventBreakImage} source={require('../../resources/DCON_2021/happy.png')}/>
                    </View>
                    <View style={styles.eventBreakRight}>
                        <Text style={styles.eventBreakText}>{item.title}</Text>
                    </View>
                </View>
            );
        }

        let startTime = item.startTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'});
        let endTime = item.endTime?.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})

        return (
            <View style={styles.eventItem}>
                <View style={{...styles.eventLeft, backgroundColor: item.workshop ? '#FFEFA2' : '#F2B965'}}>
                    <Text style={styles.eventTime}>{startTime} {endTime ? '- ' + endTime : ''}</Text>
                </View>
                <View style={styles.eventMiddle}>
                    <Text style={styles.eventTitle}>{item.title}</Text>
                    <Text style={styles.eventLocation}>{item.location}</Text>
                </View>
                <View style={styles.eventRight}>
                    {item.workshop || item.description ?
                        <TouchableOpacity onPress={item.workshop ? this.navigateDetails : () => this.setModal(item.title)}>
                            <Image 
                                style={styles.eventIcon} 
                                source={item.workshop ?
                                    require('../../resources/DCON_2021/Icons/arrow_icon.png') :
                                    require('../../resources/DCON_2021/Icons/info_icon.png')}
                                />
                        </TouchableOpacity> :
                        <></>
                    }
                </View>
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
                    <Swiper style={styles.swiper} activeDotColor={'#29738B'} onIndexChanged={(index) => this.setState({curDay: (index + 5) % 7})}>
                        <View style={styles.swiperCard}>
                            <Image style={styles.slideImage} source={require('../../resources/DCON_2021/SunClouds.png')}/>
                            <Text style={styles.slideText}>CNH District Convention 2021</Text>
                            <Text style={styles.slideDayText}>Friday</Text>
                            <Text style={styles.slideText}>March 19, Day 1</Text>
                        </View>
                        <View style={styles.swiperCard}>
                            <Image style={styles.slideImage} source={require('../../resources/DCON_2021/Snow_and_Leaves.png')}/>
                            <Text style={styles.slideText}>CNH District Convention 2021</Text>
                            <Text style={styles.slideDayText}>Saturday</Text>
                            <Text style={styles.slideText}>March 20, Day 2</Text>
                        </View>
                        <View style={styles.swiperCard}>
                            <Image style={styles.slideImage} source={require('../../resources/DCON_2021/Rain.png')}/>
                            <Text style={styles.slideText}>CNH District Convention 2021</Text>
                            <Text style={styles.slideDayText}>Sunday</Text>
                            <Text style={styles.slideText}>March 21, Day 3</Text>
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
        backgroundColor: 'white'
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
        backgroundColor: 'white'
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
        resizeMode: 'contain'
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
        backgroundColor: '#DCF0F7'
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
        color: '#29738B'
    },
    slideImage: {
        position: 'absolute',
        resizeMode: 'contain',
        width: 250,
        height: 250,
        right: -10,
        bottom: -20
    }
});