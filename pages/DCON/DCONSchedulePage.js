import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, SectionList, Image } from 'react-native';
import { getData } from '../../utils/Firebase';
import Swiper from 'react-native-swiper';
import { greaterOrEq } from 'react-native-reanimated';

const data = [ 
    {
        data: [
            {
                title: 'Service',
                startTime: new Date('December 17, 1995 03:00:00'),
                endTime: new Date('December 17, 1995 04:24:00'),
                location: 'Zoom',
            }, 
            {
                title: 'Meeting',
                startTime: new Date('December 17, 1995 03:24:00'),
                endTime: new Date('December 17, 1995 04:24:00'),
                location: 'Class'
            }
        ]
    }
];

export default class DCONSchedulePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scheduleData: [],
            curScheduleData: [],
            curDay: 0
        };
    }

    componentDidMount = async () => {
        let updatedSchedule = await getData('dcon-schedule');
        updatedSchedule.forEach((event, index) => {
            updatedSchedule[index].startTime = new Date(updatedSchedule[index].startTime?.toMillis());
            updatedSchedule[index].endTime = updatedSchedule[index].endTime?.toDate();
        });

        this.setState({scheduleData: updatedSchedule});
    };

    updateDay = (index) => {
        let day;
        switch(index) {
            case 0:
                day = 5;
                break;
            case 1:
                day = 6;
                break;
            case 2:
                day = 7;
                break;
        }

        let filteredSchedule = this.state.scheduleData.filter(event => {
            return event.startTime.getDay() === day;
        });

        return filteredSchedule;
    };

    renderEvent = ({item}) => {
        if (item.break) {
            return (
                <TouchableOpacity style={{...styles.eventItem, borderRadius: 0}}>
                    <View style={styles.eventBreakLeft}>
                        <Image style={styles.eventBreakImage} source={require('../../resources/DCON_2021/happy.png')}/>
                    </View>
                    <View style={styles.eventBreakRight}>
                        <Text style={styles.eventBreakText}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }

        let startTime = item.startTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'});
        let endTime = item.endTime?.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})

        return (
            <TouchableOpacity style={styles.eventItem}>
                <View style={{...styles.eventLeft, backgroundColor: item.workshop ? '#FFEFA2' : '#F2B965'}}>
                    <Text style={styles.eventTime}>{startTime} {endTime ? '- ' + endTime : ''}</Text>
                </View>
                <View style={styles.eventMiddle}>
                    <Text style={styles.eventTitle}>{item.title}</Text>
                    <Text style={styles.eventLocation}>{item.location}</Text>
                </View>
                <View style={styles.eventRight}>
                    <Image 
                        style={styles.eventIcon} 
                        source={item.workshop ? 
                                    require('../../resources/DCON_2021/Icons/arrow_icon.png') :
                                    require('../../resources/DCON_2021/Icons/info_icon.png')}
                    />
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.swiperContainer}>
                    <Swiper style={styles.swiper} activeDotColor={'#29738B'} onIndexChanged={(index) => this.setState({curDay: index})}>
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
                    data={this.updateDay(this.state.curDay)}
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