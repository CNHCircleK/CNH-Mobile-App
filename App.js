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

import DCONSchedulePage from "./pages/DCON/DCONSchedulePage";
import DCONScheduleDetailsPage from "./pages/DCON/DCONScheduleDetailsPage";
import DCONResourcesPage from "./pages/DCON/DCONResourcesPage";
import DCONConductPage from "./pages/DCON/DCONConductPage";
import DCONShopPage from "./pages/DCON/DCONShopPage";
import DCONMerchForm from "./pages/DCON/DCONMerchForm";
import DCONShoutoutForm from "./pages/DCON/DCONShoutoutForm";
import DCONPurchaseForm from "./pages/DCON/DCONPurchaseForm";
import DCONCandidatePage from "./pages/DCON/DCONCandidatePage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AdminStack = createStackNavigator();
const ScheduleStack = createStackNavigator();
const ResourcesStack = createStackNavigator();
const ShopStack = createStackNavigator();

// function AdminStackScreen() {
//     return (
//         <AdminStack.Navigator headerMode="none">
//             <AdminStack.Screen name="Announcements" component={FTCAnnouncementPage} />
//             <AdminStack.Screen name="Admin" component={FTCAdminPage} />
//             <AdminStack.Screen name="WorkshopAdmin" component={FTCWorkshopAdminPage} />
//         </AdminStack.Navigator>
//     );
// }

function ScheduleStackScreen() {
    return (
        <ScheduleStack.Navigator headerMode='none'>
            <ScheduleStack.Screen name='Schedule' component={DCONSchedulePage} />
            <ScheduleStack.Screen name='Schedule Details' component={DCONScheduleDetailsPage} />
        </ScheduleStack.Navigator>
    );
}

function ShopStackScreen() {
    return (
        <ShopStack.Navigator headerMode='none'>
            <ShopStack.Screen name='Shop' component={DCONShopPage} />
            <ShopStack.Screen name='Merch' component={DCONMerchForm} />
            <ShopStack.Screen name='Purchase' component={DCONPurchaseForm} />
        </ShopStack.Navigator>
    );
}

function ResourcesStackScreen() {
    return (
        <ResourcesStack.Navigator headerMode='none'>
            <ResourcesStack.Screen name='Resources' component={DCONResourcesPage} />
            <ResourcesStack.Screen name='Conduct' component={DCONConductPage} />
            <ResourcesStack.Screen name='Merch' component={DCONMerchForm} />
            <ResourcesStack.Screen name='Shoutout' component={DCONShoutoutForm} />
            <ResourcesStack.Screen name='Candidate' component={DCONCandidatePage} />
        </ResourcesStack.Navigator>
    );
}

function DCONTabScreen() {
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
                        case 'Shop':
                            iconName = 'shopping-cart'
                            break;
                        case 'Resources':
                            iconName = 'assignment'
                            break;
                        case 'Feedback':
                            iconName = 'feedback'
                            break;
                    }

                    return <MaterialIcons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                activeTintColor: Res.DCONColors.Rajah,
                inactiveTintColor: Res.DCONColors.JellyBean,
                style: {
                    backgroundColor: 'white'
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
            {/* <Tab.Screen name="Home" component={AdminStackScreen} /> */}
            <Tab.Screen name="Schedule" component={ScheduleStackScreen} />
            <Tab.Screen name="Shop" component={ShopStackScreen} />
            <Tab.Screen name="Resources" component={ResourcesStackScreen} />
            {/* <Tab.Screen name="Feedback" component={FTCResponsesPage} /> */}
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
            'RoundyyRainbows': require('./resources/DCON_2021/Fonts/RoundyRainbows.ttf')
        };
        
        await Font.loadAsync(customFonts);
    }

    async loadResourcesAsync() {
        let resources = [
            require('./resources/DCON_2021/Images/approvedlogo.png'),
            require('./resources/DCON_2021/Images/DCONpackage.jpg'),
            require('./resources/DCON_2021/Images/happy.png'),
            require('./resources/DCON_2021/Images/Harley.png'),
            require('./resources/DCON_2021/Images/Rain.png'),
            require('./resources/DCON_2021/Images/Sammy.png'),
            require('./resources/DCON_2021/Images/Snow_and_Leaves.png'),
            require('./resources/DCON_2021/Images/sun.png'),
            require('./resources/DCON_2021/Images/SunClouds.png'),
            require('./resources/DCON_2021/Images/sunny.png'),
            require('./resources/DCON_2021/Images/WindyWillow.png'),
            require('./resources/DCON_2021/Icons/arrow_icon.png'),
            require('./resources/DCON_2021/Icons/back_icon.png'),
            require('./resources/DCON_2021/Icons/edit_icon.png'),
            require('./resources/DCON_2021/Icons/exit_icon.png'),
            require('./resources/DCON_2021/Icons/feedback_icon_selected.png'),
            require('./resources/DCON_2021/Icons/feedback_icon.png'),
            require('./resources/DCON_2021/Icons/home_icon_selected.png'),
            require('./resources/DCON_2021/Icons/info_icon.png'),
            require('./resources/DCON_2021/Icons/resources_icon_selected.png'),
            require('./resources/DCON_2021/Icons/resources_icon.png'),
            require('./resources/DCON_2021/Icons/schedule_icon_selected.png'),
            require('./resources/DCON_2021/Icons/schedule_icon.png'),
            require('./resources/DCON_2021/Icons/shop_icon_selected.png'),
            require('./resources/DCON_2021/Icons/shop_icon.png')
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
                        <Stack.Screen name="DCON Tabs" component={DCONTabScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            );
        }
    }
}