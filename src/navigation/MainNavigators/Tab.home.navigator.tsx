import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { HomeNavigator } from './homeNavigator/Home.navigator';
import { InfoNavigator } from './homeNavigator/Info.navigator';
import { LocationNavigator } from './homeNavigator/Location.navigator';
import { ProfileNavigator } from './homeNavigator/Profile.navigator';

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) || 'HomePage';
  if (routeName !== 'HomePage' && routeName !== 'GuestMorePage') {
    return 'none';
  }
  return 'flex';
};

export const TabHomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="GuestHome"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: [
          {
            display: getTabBarVisible(route),
          },
        ],
      })}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={() => ({
          title: 'Нүүр',
          // tabBarIcon: ({ focused }) => (
          //   <TabBar icon="home" focused={focused} />
          // ),
        })}
      />
      <Tab.Screen
        name="InfoNavigator"
        component={InfoNavigator}
        options={() => ({
          title: 'Info',
          // tabBarIcon: ({ focused }) => (
          //   <TabBar icon="home" focused={focused} />
          // ),
        })}
      />
      <Tab.Screen
        name="LocationNavigator"
        component={LocationNavigator}
        options={() => ({
          title: 'Location',
          // tabBarIcon: ({ focused }) => (
          //   <TabBar icon="home" focused={focused} />
          // ),
        })}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={() => ({
          title: 'Profile',
          // tabBarIcon: ({ focused }) => (
          //   <TabBar icon="home" focused={focused} />
          // ),
        })}
      />
    </Tab.Navigator>
  );
};
