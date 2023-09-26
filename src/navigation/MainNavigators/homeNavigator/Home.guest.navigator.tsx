import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import login from 'src/login/login';

const HomeGuestStack = createStackNavigator();

export const HomeGuestNavigator = () => {
  return (
    <HomeGuestStack.Navigator initialRouteName="HomeGuestPage">
      <HomeGuestStack.Screen
        name="HomeGuestPage"
        component={login}
        // options={{
        //   header: () => <Header home title="Events.mn" />,
        // }}
      />
    </HomeGuestStack.Navigator>
  );
};
