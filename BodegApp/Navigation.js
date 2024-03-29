import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "./Screems/HomeScreen"


const Tab= createBottomTabNavigator();


function Tabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )
}
