import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Directions from '../screens/Directions';
import Bookmarks from '../screens/Bookmarks';
import UserProfile from '../screens/Settings/UserProfile';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

function HomeNav(){
    return(
        <HomeStack />
    );
}

function TabNav(){
  return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {elevation: 0, borderTopWidth: 0, backgroundColor: 'black'},
            tabBarIcon: ({ focused, iconColor, iconName }) => {
                if (route.name === 'Home'){
                    iconColor = focused ? '#3a86fe' : 'white'
                    iconName = 'home'
                } else if (route.name === 'Directions'){
                    iconColor = focused ? '#3a86fe' : 'white'
                    iconName = 'compass'
                } else if (route.name === 'Bookmarks'){
                    iconColor = focused ? '#3a86fe' : 'white'
                    iconName = 'bookmark'
                } else {
                    iconColor = focused ? '#3a86fe' : 'white'
                    iconName = 'user'
                }
                return <Icon name={iconName} size={25} color={iconColor} />;
            },
            tabBarShowLabel: false,
        })}
    >
        <Tab.Screen name='Home' component={HomeNav} />
        <Tab.Screen name='Directions' component={Directions} />
        <Tab.Screen name='Bookmarks' component={Bookmarks} />
        <Tab.Screen name='User' component={UserProfile} />
    </Tab.Navigator>
  )
}

export default TabNav