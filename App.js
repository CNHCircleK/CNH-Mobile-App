import React from 'react';
import { View, StyleSheet } from 'react-native';
import OnboardingPage from './pages/OnboardingPage';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import MapPage from './pages/MapPage';
import InfoPage from './pages/InfoPage';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigatorPages = createBottomTabNavigator({
    Home: { screen: HomePage },
    Schedule: { screen: SchedulePage },
    Map: { screen: MapPage },
    Info: { screen: InfoPage },
})



const StackNavigator = createStackNavigator({
    Onboarding: { screen: OnboardingPage },
    TabNavigator: { screen: TabNavigatorPages }
}, {
    headerMode: 'none'
})

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
