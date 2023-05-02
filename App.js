import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import Routing from "./src/Routing";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{HeaderShown: false}}>
                <Stack.Screen name="Routing" component={Routing}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}