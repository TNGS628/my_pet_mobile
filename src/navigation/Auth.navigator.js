import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import Login from 'src/login/login/login';


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
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
