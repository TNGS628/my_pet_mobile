import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroPage from 'src/screens/tips/Appintro';

const LocationStack = createStackNavigator();

export const LocationNavigator = () => {
  return (
    <LocationStack.Navigator
      initialRouteName="LocationPage"
      screenOptions={{ headerShown: false }}>
      <LocationStack.Screen
        name="LocationPage"
        component={AppIntroPage}
        // options={{
        //   header: () => <Header title="Events.mn" />,
        // }}
      />
    </LocationStack.Navigator>
  );
};
