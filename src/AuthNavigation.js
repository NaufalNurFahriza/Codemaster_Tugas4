import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screen/Login";
import Register from "./screen/Register";
// import ForgotPassword from "./screen/Forgotpassword";

const Stack = createStackNavigator();

function AuthNavigation() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
        </Stack.Navigator>
    )
}

export default AuthNavigation;