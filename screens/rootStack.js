import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import FetchImage from "./fetchImage";
import DisplayImage from "./displayImage";

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator  initialRouteName="Homescreen">
            <RootStack.Screen name="Fetch Screen" component={FetchImage} />
            <RootStack.Screen name="Image Screen" component={DisplayImage} /> 
    </RootStack.Navigator>
);

export default RootStackScreen;