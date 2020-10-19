import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/HomePage";
import DistrictLeadershipPage from "./pages/DistrictLeadershipPage";
import AboutPage from "./pages/AboutPage";
import DFIPage from "./pages/DFIPage";
import MRPPage from "./pages/MRPPage";
import ResourcesPage from "./pages/ResourcesPage";

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="Home" component={HomePage} />
                    <Stack.Screen name="District Leadership" component={DistrictLeadershipPage} />
                    <Stack.Screen name="About Us" component={AboutPage} />
                    <Stack.Screen name="Fundraising Initiatives" component={DFIPage} />
                    <Stack.Screen name="MRP" component={MRPPage} />
                    <Stack.Screen name="Resources" component={ResourcesPage} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
