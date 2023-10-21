import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroPage from 'src/screens/tips/Appintro';
import Profile from 'src/screens/home/ProfileScreens/profile';
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
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};
