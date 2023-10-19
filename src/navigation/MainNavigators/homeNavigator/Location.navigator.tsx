import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroPage from 'src/screens/tips/Appintro';
import Location from 'src/screens/home/location';

const LocationStack = createStackNavigator();

export const LocationNavigator = () => {
  return (
    <LocationStack.Navigator
      initialRouteName="LocationPage"
      screenOptions={{ headerShown: false }}>
      <LocationStack.Screen name="LocationPage" component={Location} />
    </LocationStack.Navigator>
  );
};
