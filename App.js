import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "./pages/HomePage";
import DistrictLeadershipPage from "./pages/DistrictLeadershipPage";
import AboutPage from "./pages/AboutPage";
import DFIPage from "./pages/DFIPage";
import MRPPage from "./pages/MRPPage";
import ResourcesPage from "./pages/ResourcesPage";
import FTCSchedulePage from "./pages/FTC/FTCSchedulePage";
import FTCAdminPage from "./pages/FTC/FTCAdminPage";
import FTCAnnouncementPage from "./pages/FTC/FTCAnnouncePage";
import FTCShoutoutPage from "./pages/FTC/FTCShoutoutPage";
import { setupNotifications } from "./utils/Notifications";
import { setupFirebase } from "./utils/Firebase";
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import Res from '@resources';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function FTCTabScreen() {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Schedule') {
                        iconName = 'md-list-box';
                    } else if (route.name === 'Admin') {
                        iconName = 'md-bonfire';
                    } else if (route.name === 'Announcements') {
                        iconName = 'md-notifications';
                    } else if (route.name === 'Shoutouts') {
                        iconName = 'md-megaphone';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: '#704346'
                },
                labelStyle: {
                    marginBottom: 4
                },
                iconStyle: {
                    marginTop: 4
                }
            }}
            backBehavior={'none'}
        >
            <Tab.Screen name="Announcements" component={FTCAnnouncementPage} />
            <Tab.Screen name="Schedule" component={FTCSchedulePage} />
            <Tab.Screen name="Shoutouts" component={FTCShoutoutPage} />
            <Tab.Screen name="Admin" component={FTCAdminPage} />
        </Tab.Navigator>
    );
}



export default class App extends Component {
    constructor(props) {
        super(props);
        setupFirebase();
        setupNotifications();
        this.state = {}
    }

    async loadFontsAsync() {
        let customFonts = {
            'Arbutus-Slab': require('./resources/ftc2020/fonts/arbutus-slab.ttf'),
            'French-Press': require('./resources/ftc2020/fonts/frenchpress.otf'),
            'Gilberto': require('./resources/ftc2020/fonts/gilberto.ttf')
        };
        const fontRes = await Font.loadAsync(customFonts);
    }

    async loadResourcesAsync() {
      let resources = [
        require('./resources/ftc2020/images/pin.png'),
        require('./resources/ftc2020/images/logo.png'),
        require('./resources/ftc2020/images/clipboard.png'),
        require('./resources/ftc2020/images/redlightsbackground.gif'),
        require('./resources/ftc2020/images/sign.png'),
        require('./resources/ftc2020/images/stickynote.png'),
        require('./resources/ftc2020/images/string1.png'),
        require('./resources/ftc2020/images/string2.png'),
        require('./resources/ftc2020/images/string3.png'),
        require('./resources/ftc2020/images/bluelightsbackground.gif'),
      ];
      const loadedResources = resources.map(res => {
        return typeof res === 'string' ? Image.prefetch(res) :
        Asset.fromModule(res).downloadAsync();
      });
      return Promise.all(loadedResources);
    }

    async componentDidMount() {
        await this.loadFontsAsync();
        await this.loadResourcesAsync();
        this.setState({ loaded: true });
    }

    render() {
      if (!this.state.loaded){
        return <AppLoading/>;
      }
      else {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="FTC Tabs" component={FTCTabScreen} />
                    <Stack.Screen name="Home" component={HomePage} />
                    <Stack.Screen name="About Us" component={AboutPage} />
                    <Stack.Screen name="Fundraising Initiatives" component={DFIPage} />
                    <Stack.Screen name="MRP" component={MRPPage} />
                    <Stack.Screen name="District Leadership" component={DistrictLeadershipPage} />
                    <Stack.Screen name="Resources" component={ResourcesPage} />
                </Stack.Navigator>
            </NavigationContainer>
        );
      }
    }
}
