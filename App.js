import React, { Component, PureComponent } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { View, StyleSheet, StatusBar } from 'react-native';
import { ComingSoonPage, HomePage, InfoPage, MapPage, OnboardingPage, SchedulePage,
CampfireSkitsPage, DjPage, MediaPage, SAAPage, TeamCaptainPage, WorkshopsPage,
FAQRegistrationPage, FAQTimePage, FAQActivitiesPage, FAQFinancePage, FAQSAAPage, FAQNavigationPage, FAQMiscPage, ContactsPage } from './pages';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigatorPages = createBottomTabNavigator({
    Home: { screen: HomePage,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='md-home' size={20} color={tintColor} />
        )
      } },
    Schedule: { screen: SchedulePage,
      navigationOptions: {
        tabBarLabel: 'Schedule',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='md-list-box' size={20} color={tintColor} />
        )
      } },
    Map: { screen: ComingSoonPage,
      navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='md-map' size={20} color={tintColor} />
        )
      } },
    Info: { screen: ComingSoonPage,
      navigationOptions: {
        tabBarLabel: 'Info',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='md-information-circle' size={20} color={tintColor} />
        )
      } }
}, {
  tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#9b9c98',
    style: {
      backgroundColor: '#055c75'
    },
    labelStyle: {
      marginBottom: 6,
      fontFamily: 'Musket-Regular'
    },
    iconStyle: {
      marginTop: 6
    }
  }
})

const StackNavigator = createStackNavigator({
    Onboarding: { screen: OnboardingPage },
    TabNavigator: { screen: TabNavigatorPages },
    Workshops: { screen: WorkshopsPage },
    TeamCaptain: { screen: TeamCaptainPage },
    Dj: { screen: DjPage },
    CampfireSkits: { screen: CampfireSkitsPage },
    Saa: { screen: SAAPage },
    Media: { screen: MediaPage },
    FAQRegistration: { screen: FAQRegistrationPage },
    FAQTime: { screen: FAQTimePage },
    FAQActivities: { screen: FAQActivitiesPage },
    FAQFinance: { screen: FAQFinancePage },
    FAQSAA: { screen: FAQSAAPage },
    FAQNavigation: { screen: FAQNavigationPage },
    FAQMisc: { screen: FAQMiscPage },
    Contacts: { screen: ContactsPage }
}, {
    headerMode: 'none'
})

const AppContainer = createAppContainer(StackNavigator);

export default class App extends Component {
  state = {};

  async componentDidMount(){
    await Font.loadAsync({
      'Cabin-Bold': require('./resources/fonts/Cabin-Bold.ttf'),
      'Cabin-BoldItalic': require('./resources/fonts/Cabin-BoldItalic.ttf'),
      'Cabin-Medium': require('./resources/fonts/Cabin-Medium.ttf'),
      'Cabin-MediumItalic': require('./resources/fonts/Cabin-MediumItalic.ttf'),
      'Cabin-Regular': require('./resources/fonts/Cabin-Regular.ttf'),
      'Cabin-RegularItalic': require('./resources/fonts/Cabin-RegularItalic.ttf'),
      'Cabin-SemiBold': require('./resources/fonts/Cabin-SemiBold.ttf'),
      'Cabin-SemiBoldItalic': require('./resources/fonts/Cabin-SemiBoldItalic.ttf'),
      'Musket-Bold': require('./resources/fonts/Musket-bold.ttf'),
      'Musket-Regular': require('./resources/fonts/Musket-regular.ttf'),

    });
    this.setState({loaded: true});
  }

  render() {
    if (!this.state.loaded) {
          return <AppLoading />;
      }
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <AppContainer />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
