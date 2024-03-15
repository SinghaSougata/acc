import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import { VectorIcon } from './Screens/vectoricon';
import Home from './Screens/Home';
import theme from './Screens/Theme';
import {Platform} from 'react-native';
import Products from './Screens/Products';
import { getFontSize, getResHeight } from './Screens/responsive';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#999999',
        tabBarActiveTintColor: theme.color.secondPrimary,
        tabBarLabelStyle: [
          {
            fontSize: getFontSize(12),
            fontFamily: theme.font.mulishRegular,
            fontWeight: '500',
          },
          Platform.OS === 'android' && {
            marginBottom: getResHeight(8),
          },
        ],
        tabBarIconStyle: [
          {
            margin: 0,
          },
          Platform.OS === 'android' && {
            marginTop: getResHeight(4),
          },
        ],
        tabBarStyle: [
          {
            backgroundColor: theme.color.accent,
            height: getResHeight(70),
            paddingTop: getResHeight(5),
          },
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <VectorIcon
              type={'Octicons'}
              name={'home'}
              size={getFontSize(20)}
              color={focused ? '#053C6D' : '#999999'}
            />
          ),
        }}
      />
        <Tab.Screen
          name="Products"
          component={Products}
        
          options={{
            tabBarLabel: 'Products',
            tabBarIcon: ({focused}) => (
              <VectorIcon
                type={'Octicons'}
                name={'briefcase'}
                size={getFontSize(20)}
                color={focused ? '#053C6D' : '#999999'}
              />
            ),
          }}
        />
       
      

    
   
    </Tab.Navigator>
  );
};

export default TabNavigation;
