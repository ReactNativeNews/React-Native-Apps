import React, { Component } from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import All from './All'
import { StyleSheet, Text, View } from "react-native";
import Business from './Business'
import Health from './Health'
import Sports from './Sports'
import Entertainment from './Entertainment'
import Science from './Science'
import Tech from './Tech'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Ionicons} from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
const AppTabNavigator = createBottomTabNavigator({
    Everything: {
        screen: All,
        
        navigationOptions:{
            tabBarIcon:({tintColor})=><Feather name="grid" size={24} color={tintColor}/>
        }
    },
    Business: {
        screen: Business,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Feather name="briefcase" size={24} color={tintColor}/>
        }
    },
    Health: {
        screen: Health,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Feather name="activity" size={24} color={tintColor}/>
        }
    },
    Sports: {
        screen: Sports,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Ionicons name = "ios-baseball" size={24} color={tintColor}></Ionicons>
        }
    },
    Entertainment: {
        screen: Entertainment,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Feather name="film" size={24} color={tintColor}/>
        }
    },
    Science: {
        screen: Science,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Entypo name="light-bulb" size={24} color={tintColor}/>
        }
    },
    Tech: {
        screen: Tech,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Feather name="smartphone" size={24} color={tintColor}/>
        }
    }
},
{
    tabBarOptions:{
        activeTintColor:'#00072D',
        
        inactiveTintColor:'#2196f3',
        showLabel:true,
        style: {
            backgroundColor: "white",
            borderTopColor: "white",
          },
        
    }
}

)


export default createAppContainer(
    createSwitchNavigator(
        {
            App:AppTabNavigator,
           
        }
    )
)
