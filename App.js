import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setupNotifications } from "./utils/Notifications";
import { setupFirebase } from "./utils/Firebase";
import { MaterialIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import Res from '@resources';
import { SplashScreen } from 'expo';

import FTC21HomePage from "./pages/FTC-2021/FTC21HomePage";
import FTC2021SchedulePage from "./pages/FTC-2021/FTC2021SchedulePage";
import FTC2021ActivityPage from "./pages/FTC-2021/FTC2021ActivityPage";
import FTC2021ResourcesPage from "./pages/FTC-2021/FTC2021ResourcesPage";
import FTC2021WebViewPage from "./pages/FTC-2021/FTC2021WebViewPage";
import DCONScheduleDetailsPage from "./pages/FTC-2021/DCONScheduleDetailsPage";
import FTC2021DocumentsPage from "./pages/FTC-2021/FTC2021DocumentsPage";
import FTCAdminPage from "./pages/FTC-2021/FTC2021AdminPage";
import FTC2021AnnouncementsPage from "./pages/FTC-2021/FTC2021AnnouncementsPage";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ScheduleStack = createStackNavigator();
const ResourcesStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator headerMode="none">
            <HomeStack.Screen name="Home" component={FTC21HomePage} />
            <HomeStack.Screen name="Announcements" component={FTC2021AnnouncementsPage} />
            <HomeStack.Screen name="Admin" component={FTCAdminPage} />
        </HomeStack.Navigator>
    );
}

function ScheduleStackScreen() {
    return (
        <ScheduleStack.Navigator headerMode='none'>
            <ScheduleStack.Screen name='Schedule' component={FTC2021SchedulePage} />
            <ScheduleStack.Screen name='Schedule Details' component={DCONScheduleDetailsPage} />
        </ScheduleStack.Navigator>
    );
}

function ActivityStackScreen() {
    return (
        <ResourcesStack.Navigator headerMode='none'>
            <ResourcesStack.Screen name='Activities' component={FTC2021ActivityPage} />
            <ResourcesStack.Screen name='ActivitiesWebView' component={FTC2021WebViewPage} />
        </ResourcesStack.Navigator>
    );
}

function ResourcesStackScreen() {
    return (
        <ResourcesStack.Navigator headerMode='none'>
            <ResourcesStack.Screen name='Resources' component={FTC2021ResourcesPage} />
            <ResourcesStack.Screen name='Documents' component={FTC2021DocumentsPage} />
            <ResourcesStack.Screen name='ResourcesWebView' component={FTC2021WebViewPage} />
        </ResourcesStack.Navigator>
    );
}

function FTCTabScreen() {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Schedule':
                            iconName = 'access-time'
                            break;
                        case 'Activities':
                            iconName = 'accessibility'
                            break;
                        case 'Resources':
                            iconName = 'assignment'
                            break;
                    }

                    return <MaterialIcons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                activeTintColor: Res.FTCColors.Liptz,
                inactiveTintColor: Res.FTCColors.Eggshell,
                style: {
                    backgroundColor: Res.FTCColors.Blarp,
                    borderTopColor: Res.FTCColors.Blarp
                },
                labelStyle: {
                    marginBottom: 4,
                },
                iconStyle: {
                    marginTop: 8
                }
            }}
            backBehavior={'none'}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Schedule" component={ScheduleStackScreen} />
            <Tab.Screen name="Activities" component={ActivityStackScreen} />
            <Tab.Screen name="Resources" component={ResourcesStackScreen} />
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
            'Coolvetica': require('./resources/DCON_2021/Fonts/coolvetica.ttf'),
            'Corpuscare': require('./resources/DCON_2021/Fonts/corpuscare.ttf'),
            'Malvie': require('./resources/DCON_2021/Fonts/Malvie.otf'),
            'Plumpfull': require('./resources/DCON_2021/Fonts/Plumpfull.ttf'),
            'RoundyyRainbows': require('./resources/DCON_2021/Fonts/RoundyRainbows.ttf'),

            'Facultad': require('./resources/FTC_2021/Fonts/Facultad-Regular.otf'),
            'Metropolis': require('./resources/FTC_2021/Fonts/Metropolis-Medium.otf'),
            'SpaceGroteskBold': require('./resources/FTC_2021/Fonts/SpaceGrotesk-Bold.otf'),
            'AvenirNext': require('./resources/FTC_2021/Fonts/AvenirNextLTPro-Regular.otf')
        };

        await Font.loadAsync(customFonts);
        preloadSplash = async () => {
            await cacheResources([require('./resources/FTC_2021/Images/cape_animation.gif')]);
          }
          preloadRes = async () => {
            SplashScreen.hide();
          }
    }

    async loadResourcesAsync() {
        let resources = [
            require('./resources/FTC_2021/Images/Acorn_Lantern.png'),
            require('./resources/FTC_2021/Images/cape_animation.gif'),
            require('./resources/FTC_2021/Images/Crossbow.png'),
            require('./resources/FTC_2021/Images/L_Quest_Alert.png'),
            require('./resources/FTC_2021/Images/Logo.png'),
            require('./resources/FTC_2021/Images/Map.png'),
            require('./resources/FTC_2021/Images/R_Quest_Alert.png'),
            require('./resources/FTC_2021/Images/SAAShiftImage.png'),
            require('./resources/FTC_2021/Images/Stone_Sword.png'),
            require('./resources/FTC_2021/Icons/Frog_Golem.png'),
            require('./resources/FTC_2021/Icons/Frog_Golem_2.png'),
            require('./resources/FTC_2021/Icons/Glow_Mushroom.png'),
            require('./resources/FTC_2021/Icons/Sakura_Fish.png'),
        ];

        const loadedResources = resources.map(res => {
            return typeof res === 'string' ? Image.prefetch(res) : Asset.fromModule(res).downloadAsync();
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
            return <AppLoading />;
        } else {
            return (
                <NavigationContainer>
                    <Stack.Navigator headerMode="none">
                        <Stack.Screen name="FTC Tabs" component={FTCTabScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            );
        }
    }
}
