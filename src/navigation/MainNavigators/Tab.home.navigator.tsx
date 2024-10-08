import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { HomeNavigator } from './homeNavigator/Home.navigator';
import { InfoNavigator } from './homeNavigator/Info.navigator';
import { LocationNavigator } from './homeNavigator/Location.navigator';
import { ProfileNavigator } from './homeNavigator/Profile.navigator';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View } from 'react-native';
import Calculator from 'src/utils/calculator';

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) || 'HomePage';
  if (routeName !== 'HomePage' && routeName !== 'UserProfilePage') {
    return 'none';
  }
  return 'flex';
};

export const TabHomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: [
          {
            display: getTabBarVisible(route),
            // paddingBottom: 5,
          },
        ],
      })}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={() => ({
          title: 'Нүүр',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={Calculator(20)} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="InfoNavigator"
        component={InfoNavigator}
        options={() => ({
          title: 'Mэдээлэл',
          tabBarIcon: ({ color }) => (
            <Icon name="paw" size={Calculator(20)} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="LocationNavigator"
        component={LocationNavigator}
        options={() => ({
          title: 'Байршил',
          tabBarIcon: ({ color }) => (
            <Icon name="map" size={Calculator(20)} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={() => ({
          title: 'Профайл',
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={Calculator(20)} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
