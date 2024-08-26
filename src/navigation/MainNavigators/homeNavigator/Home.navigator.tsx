import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'src/screens/home/home';
import PetDetail from 'src/screens/home/petDetail';

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomePage" component={Home} />
      <HomeStack.Screen name="PetDetailPage" component={PetDetail} />
    </HomeStack.Navigator>
  );
};
