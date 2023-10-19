import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroPage from 'src/screens/tips/Appintro';

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="HomePage"
        component={AppIntroPage}
        // options={{
        //   header: () => <Header home title="Events.mn" />,
        // }}
      />
    </HomeStack.Navigator>
  );
};
