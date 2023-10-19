import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroPage from 'src/screens/tips/Appintro';
import Home from 'src/screens/home/home';

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="HomePage"
        component={Home}
        // options={{
        //   header: () => <Header home title="Events.mn" />,
        // }}
      />
    </HomeStack.Navigator>
  );
};
