import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroPage from 'src/screens/tips/Appintro';

const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="ProfilePage"
      screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen
        name="ProfilePage"
        component={AppIntroPage}
        // options={{
        //   header: () => <Header title="Events.mn" />,
        // }}
      />
    </ProfileStack.Navigator>
  );
};
