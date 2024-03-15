import {View, Text} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
const RootStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function StackNavigation(props) {
  return (
    <RootStack.Navigator
      initialRouteName={"tab"}
    >
        <HomeStack.Screen
          name="tab"
          component={TabNavigation}
          options={{headerShown: false}}
        />
    </RootStack.Navigator>
  );
}
