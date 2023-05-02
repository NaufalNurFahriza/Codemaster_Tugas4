import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screen/SplashScreen";
import AuthNavigation from "./AuthNavigation";

const Stack = createStackNavigator();

export default function Routing() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SplashScreen" component={SplashScreen}/>
                <Stack.Screen name="AuthNavigation" component={AuthNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}