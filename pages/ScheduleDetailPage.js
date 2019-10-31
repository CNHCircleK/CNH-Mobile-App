import React, { Component } from 'react';
import { Text, View, FlatList, Picker, StyleSheet, TouchableOpacity,
  SafeAreaView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Res from '@resources';
import { HeaderBackButton } from 'react-navigation';

export default class ScheduleDetailPage extends Component {
    state = {
        title: this.props.navigation.getParam('title', "404"),
        data: this.props.navigation.getParam('data', [])
    }

    getEventRender(item) {
        return (
            <View style={styles.eventRow}>
                {/*<View style={styles.eventIconBox}>
                    <Icon style={styles.eventIcon} name='md-information-circle' size={24} color={'black'} />
                </View>*/}
                <View style={styles.eventData}>
                    <Text style={styles.eventNameText}>{item.title}</Text>
                    <Text style={styles.eventLocationText}>{item.location}</Text>
                    <Text style={styles.eventLocationText}>{item.description}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
          <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
              <HeaderBackButton tintColor='#fefefe' onPress={() => this.props.navigation.goBack(null)} />
                <View style={styles.header}>
                    <Text style={styles.headerText}>{this.state.title}</Text>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.getEventRender(item)}
                    keyExtractor={item => item.id}
                    extraData={this.state}
                />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#1a1d32',
    },
    container: {
        flex: 1,
        backgroundColor: '#1a1d32'
    },
    header: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Musket-Bold',
        color: '#ffffff'
    },
    eventRow: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10
    },
    eventData: {
        flex: 4,
        justifyContent: 'center'
    },
    eventNameText: {
        fontSize: 16,
        fontFamily: 'Cabin-Bold',
        color: "#ffffff",
        marginBottom: 5
    },
    eventLocationText: {
        fontSize: 12,
        fontFamily: 'Cabin-Regular',
        color: '#fefefe',
        opacity: 0.7
    }
});
