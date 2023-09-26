import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import AppIntroPage from 'src/screens/tips/Appintro';


const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{ presentation: 'card' }}>
      <AuthStack.Screen
        name="LoginPage"
        component={AppIntroPage}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
