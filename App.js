import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import OnboardingPage from './OnboardingPage';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import MapPage from './pages/MapPage';
import InfoPage from './pages/InfoPage';
import ComingSoonPage from './pages/ComingSoonPage';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
    Home: { screen: HomePage },
    Onboarding: { screen: OnboardingPage },
    Schedule: { screen: SchedulePage },
    Map: { screen: MapPage },
    Info: { screen: InfoPage },
    ComingSoon: { screen: ComingSoonPage },
}, {
    headerMode: 'none'
});

const AppContainer = createAppContainer(MainNavigator);

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <AppContainer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});