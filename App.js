import React, { Component, PureComponent } from 'react';
import { AppLoading, SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { View, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';
import { ComingSoonPage, HomePage, InfoPage, MapPage, OnboardingPage, SchedulePage,
OfficeHoursPage,
CampfireSkitsPage, DjPage, MediaPage, SAAPage, TeamCaptainPage, WorkshopsPage, TechPage,
FAQRegistrationPage, FAQTimePage, FAQActivitiesPage, FAQFinancePage, FAQSAAPage, FAQNavigationPage, FAQMiscPage, ContactsPage,
WorkshopsDetailPage } from './pages';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigatorPages = createBottomTabNavigator({
    Home: { screen: HomePage,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='md-home' size={20} color={tintColor} />
        )
<<<<<<< HEAD
      } },
    Schedule: { screen: SchedulePage,
      navigationOptions: {
        tabBarLabel: 'Schedule',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='md-list-box' size={20} color={tintColor} />
        )
      } },
    // Map: { screen: ComingSoonPage,
    //   navigationOptions: {
    //     tabBarLabel: 'Map',
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name='md-map' size={20} color={tintColor} />
    //     )
    //   } },
=======
      } } ,
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
>>>>>>> ad18f08... map page
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

const StackNavigator = createStackNavigator({
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
    WorkshopsDetail: { screen: WorkshopsDetailPage }
}, {
    headerMode: 'none',
    initialRouteName: "TabNavigator"
})

const AppContainer = createAppContainer(StackNavigator);

async function cacheResources(resources) {
  return resources.map(res => {
    return typeof res === 'string' ? Image.prefetch(res) :
    Asset.fromModule(res).downloadAsync();
  });
}

export default class App extends Component {
  state = {};

  preloadSplash = async () => {
    await cacheResources([require('./resources/images/splash.gif')]);
  }
  preloadRes = async () => {
    SplashScreen.hide();
    const fontRes = Font.loadAsync({
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
    const imageRes =  cacheResources([
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
    await Promise.all([fontRes, imageRes]);
    this.setState({resLoaded: true});
  }

  render() {
    if (!this.state.splashLoaded) {
          return <AppLoading
          startAsync={this.preloadSplash}
          onFinish={() => this.setState({ splashLoaded: true })}/>;
      }
    if (!this.state.resLoaded) {
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
