import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from './src/component/screens/Search'
import Home from './src/component/screens/Home'
import Reels from './src/component/screens/Reels'
import Activity from './src/component/screens/Activity'
import Profile from './src/component/screens/Profile'

const App = () => {

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const BottomTabScreen = () => {
        return (
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarStyle: { height: 50 },
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                        size = focused ? size + 8 : size + 2;
                    }
                    else if (route.name == 'Search') {
                        iconName = focused ? 'search' : 'ios-search-outline';
                    }
                    else if (route.name == 'Reels') {
                        iconName = focused ? 'caret-forward-circle' : 'caret-forward-circle-outline';
                    }
                    else if (route.name == 'Activity') {
                        iconName = focused ? 'ios-heart' : 'ios-heart-outline';
                    }
                    else if (route.name == 'Profile') {
                        iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
                    }
                    return <Ionic name={iconName} size={size} color={color} />
                }
            })}>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Search' component={Search} />
                <Tab.Screen name='Reels' component={Reels} />
                <Tab.Screen name='Activity' component={Activity} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        )
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Bottom' component={BottomTabScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App

const styles = StyleSheet.create({})