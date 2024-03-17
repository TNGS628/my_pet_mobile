import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from 'src/screens/home/ProfileScreens/userProfile';
import EditProfile from 'src/screens/home/ProfileScreens/editProfile';

const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="ProfilePage"
      screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};
