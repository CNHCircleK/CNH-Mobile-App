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
import FTCWorkshopPage from "./pages/FTC/FTCWorkshopPage";
import { setupNotifications } from "./utils/Notifications";
import { setupFirebase } from "./utils/Firebase";
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const FTCSchedule = createStackNavigator();

function ScheduleStacksScreen() {
    return (
        <FTCSchedule.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <FTCSchedule.Screen name="Schedule" component={FTCSchedulePage} />
            <FTCSchedule.Screen name="Workshop" component={FTCWorkshopPage} />
        </FTCSchedule.Navigator>
    )
}

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
                activeTintColor: '#E3AEA8',
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
        >
            <Tab.Screen name="Announcements" component={FTCAnnouncementPage} />
            <Tab.Screen name="Schedule" component={ScheduleStacksScreen} />
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
    }

    render() {
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
