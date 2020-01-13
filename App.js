import React, { Component, PureComponent } from 'react';
import { AppLoading, SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { View, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';
import { ComingSoonPage, HomePage, InfoPage, MapPage, OnboardingPage, SchedulePage,
OfficeHoursPage,
CampfireSkitsPage, DjPage, MediaPage, SAAPage, TeamCaptainPage, WorkshopsPage, TechPage,
FAQRegistrationPage, FAQTimePage, FAQActivitiesPage, FAQFinancePage, FAQSAAPage, FAQNavigationPage, FAQMiscPage, ContactsPage,
ScheduleDetailPage } from './pages';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigatorPages = createBottomTabNavigator({        // Set up navbar navigation info
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
    // Map: { screen: ComingSoonPage,
    // Schedule: { screen: ComingSoonPage,
    //   navigationOptions: {
    //     tabBarLabel: 'Map',
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name='md-map' size={20} color={tintColor} />
    //     )
    //   } },

    // Schedule: { screen: ComingSoonPage,
    //   navigationOptions: {
    //     tabBarLabel: 'Schedule',
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name='md-list-box' size={20} color={tintColor} />
    //     )
    //   } },

    Map: { screen: MapPage,
    navigationOptions: {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor }) => (
    <Icon name='md-map' size={20} color={tintColor} />
    )
    } }
    // Info: { screen: ComingSoonPage,
    //   navigationOptions: {
    //     tabBarLabel: 'Info',
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name='md-information-circle' size={20} color={tintColor} />
    //     )
    //   } }
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

const StackNavigator = createStackNavigator({         // Set up how pages are stacked for navigation
    Onboarding: { screen: OnboardingPage },
    TabNavigator: { screen: TabNavigatorPages },
    OfficeHours: { screen: OfficeHoursPage },
    Workshops: { screen: WorkshopsPage },
    TeamCaptain: { screen: TeamCaptainPage },
    Dj: { screen: DjPage },
    CampfireSkits: { screen: CampfireSkitsPage },
    Saa: { screen: SAAPage },
    Media: { screen: MediaPage },
    Tech: { screen: TechPage },
    FAQRegistration: { screen: FAQRegistrationPage },
    FAQTime: { screen: FAQTimePage },
    FAQActivities: { screen: FAQActivitiesPage },
    FAQFinance: { screen: FAQFinancePage },
    FAQSAA: { screen: FAQSAAPage },
    FAQNavigation: { screen: FAQNavigationPage },
    FAQMisc: { screen: FAQMiscPage },
    Contacts: { screen: ContactsPage },
    ScheduleDetail: { screen: ScheduleDetailPage }
}, {
    headerMode: 'none',                               // Make action bar invisible
    initialRouteName: "TabNavigator"                  // Initial page when app starts is TabNavigator
})

const AppContainer = createAppContainer(StackNavigator);

async function cacheResources(resources) {            // Cache resources and return an array of promises
  return resources.map(res => {                       
    return typeof res === 'string' ? Image.prefetch(res) :    
    Asset.fromModule(res).downloadAsync();            
  });
}

export default class App extends Component {
  state = {};

  preloadSplash = async () => {                       // Cache splash image
    await cacheResources([require('./resources/images/splash.gif')]);
  }
  preloadRes = async () => {                          // Preload all resources
    SplashScreen.hide();
    const fontRes = Font.loadAsync({                  // Load font resources
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
    // TODO: images and colors need to be abstracted and stored in their own res
    // files, much like strings
    const imageRes =  cacheResources([                // Cache image resources
      require('./resources/images/HomePage/hint_papers.png'),
      require('./resources/images/HomePage/detective.png'),
      require('./resources/images/HomePage/ftc_logo.png'),
      require('./resources/videos/Homepage-Call-to-FTC.mp4'),
      require('./resources/images/ComingSoonPage/sign.png'),
      require("./resources/images/LeadershipOpportunities/teamcaptains.png"),
      require("./resources/images/LeadershipOpportunities/dj.png"),
      require("./resources/images/LeadershipOpportunities/talent.png"),
      require("./resources/images/LeadershipOpportunities/saa.png"),
      require("./resources/images/LeadershipOpportunities/media.png"),
      require("./resources/images/LeadershipOpportunities/tech.png"),
      require("./resources/images/LeadershipOpportunities/workshops.png")
    ]);
    await Promise.all([fontRes, imageRes]);           // Wait for all fonts and images to be cached
    this.setState({resLoaded: true});                 // Indicate all resources have been cached
  }

  render() {
    if (!this.state.splashLoaded) {                   // App starts by caching splashscreen image
          return <AppLoading
          startAsync={this.preloadSplash}
          onFinish={() => this.setState({ splashLoaded: true })}/>;     // Indicate splashscreen image has loaded
      }
    if (!this.state.resLoaded) {                      // Display splashscreen until resources are loaded
      const {width, height} = Dimensions.get("window");
      return (
        <View style={{flex: 1, backgroundColor: "#252525", justifyContent: "center", alignItems: "center"}}>
          <Image style={{maxWidth: width, maxHeight: height}}
          source={require('./resources/images/splash.gif')}
          resizeMode="contain"
          onLoad={this.preloadRes}/>
        </View>
      );
    }
  return (                                            // Proceeds to home page when all resources are loaded
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
