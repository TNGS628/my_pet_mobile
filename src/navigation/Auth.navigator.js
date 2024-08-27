import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroPage from 'src/screens/tips/Appintro';
import Login from 'src/screens/login/login';
import Register from 'src/screens/login/register';
import ForgotPassword from 'src/screens/login/forgotPassword';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{ presentation: 'card' }}>
      <AuthStack.Screen
        name="LoginPage"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="RegisterPage"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen 
        name="ForgotPasswordPage"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
