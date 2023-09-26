import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { HomeGuestNavigator } from './homeNavigator/Home.guest.navigator';

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) || 'HomeGuestPage';
  if (
    routeName !== 'HomeGuestPage' &&
    routeName !== 'GuestMorePage'
  ) {
    return 'none';
  }
  return 'flex';
};

export const TabHomeNavigator = () => {

  return (
    <View>
      <View>
        <Tab.Navigator
          initialRouteName="GuestHome"
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarStyle: [
              {
                display: getTabBarVisible(route),
              },
              // styles.tabBarContainerStyle,
            ],
          })}>
          <Tab.Screen
            name="HomeGuestNavigator"
            component={HomeGuestNavigator}
            // options={() => ({
            //   title: 'Нүүр',
            //   headerShown: false,
            //   tabBarIcon: ({ focused }) => (
            //     <TabBar icon="home" focused={focused} />
            //   ),
            // })}
          />
        </Tab.Navigator>
      </View>
      <SafeAreaView />
    </View>
  );
};
